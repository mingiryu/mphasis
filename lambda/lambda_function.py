import os
import boto3
import json
from textblob import TextBlob
import nltk

nltk.data.path.append("/tmp")
nltk.download("punkt", download_dir="/tmp")

# grab environment variables
ENDPOINT_NAME = os.environ["ENDPOINT_NAME"]

# load services
sagemaker = boto3.client(service_name="runtime.sagemaker", region_name="us-east-1")
comprehend = boto3.client(service_name="comprehend", region_name="us-east-1")


def getSummary(payload):
    response = sagemaker.invoke_endpoint(
        EndpointName=ENDPOINT_NAME, ContentType="text/plain", Body=payload
    )
    return response["Body"].read().decode().split("\nExecution time : ")[0]


def getKeywords(text):
    response = comprehend.detect_key_phrases(Text=text, LanguageCode="en")
    return [keyphrase["Text"] for keyphrase in response["KeyPhrases"]]


def getSentiment(paragraph):
    sentiment = []
    for sentence in TextBlob(paragraph).sentences:
        sentiment.append(
            dict(
                subjectivity=round(sentence.subjectivity, 3),
                polarity=round(sentence.polarity, 3),
                sentence=str(sentence),
            )
        )
    return sentiment


def getParagraphs(payload):
    return payload.strip("\n").split("\n\n")


def chunkString(string, length):
    string = string.replace("’", "'").replace("“", "").replace("”", "").replace('"', "")
    return (string[0 + i : length + i] for i in range(0, len(string), length))


def cleanSummary(summary):
    return (
        summary.replace(" i ", " I ")
        .replace(" ,", ",")
        .replace(" ;", ";")
        .replace(" '", "'")
    )


def cleanKeywords(keywords):
    res = []
    for keyword in keywords:
        key = keyword.lower()
        if key not in res:
            res.append(key)
    return res


def lambda_handler(event, context):

    # get payload
    data = json.loads(json.dumps(event))
    if "payload" not in data:
        return dict(result="Missing Payload")
    payload = data["payload"]

    

    sentiments = []
    for paragraph in getParagraphs(payload):
        sentiments.append(getSentiment(paragraph))

    summary = []
    keywords = []
    try:
        for chunk in chunkString(payload, 5000):
            if len(chunk) < 3500:
                summary.append(getSummary(chunk + chunk))
            else:
                summary.append(getSummary(chunk))

        keywords = getKeywords(" ".join(summary))
    except:
        summary = ["Unfortunately, there was not enough content to generate a summary. Please try again with some more content."]
        keywords = getKeywords(payload)

    return dict(
        result="Success",
        data=dict(
            summary=list(map(cleanSummary, summary)),
            sentiments=sentiments,
            keywords=cleanKeywords(keywords),
        ),
    )


""" data model
input: JSON
{
    payload: "..."
}

output: JSON
{
    result: "Success|Missing Payload|",
    data: {
        keywords: ["..."],
        summary: ["..."],
        sentiments: [
            [
                {
                    sentence: "...",
                    subjectivity: 0.0,
                }
            ]
        ]
    }
}
"""
