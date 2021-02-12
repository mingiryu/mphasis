import os
import boto3
import json
import nltk

from textblob import TextBlob
from collections import Counter

""" Services and dependencies """
nltk.data.path.append("/tmp")
nltk.download("punkt", download_dir="/tmp")
# sagemaker = boto3.client(service_name="runtime.sagemaker", region_name="us-east-1")
comprehend = boto3.client(service_name="comprehend", region_name="us-east-1")

""" Article """


def getArticle(payload):
    return json.loads(payload)["article"]


""" Utils """


def getParagraphs(text):
    return text.strip("\n").split("\n\n")


""" Sentiment """


def getSentiments(paragraphs):
    return [
        [
            dict(
                subjectivity=round(sentence.subjectivity, 2),
                polarity=round(sentence.polarity, 2),
            )
            for sentence in TextBlob(paragraph).sentences
        ]
        for paragraph in paragraphs
    ]


""" Keyphrase """


def getComprehend(paragraphs):
    return sum(
        [
            comprehend.detect_key_phrases(Text=paragraph, LanguageCode="en")[
                "KeyPhrases"
            ]
            for paragraph in paragraphs
        ],
        [],
    )


def cleanKeyphrases(keyphrases):
    return (
        keyphrase["Text"]
        .replace("the ", "")
        .replace("a ", "")
        .replace("its ", "")
        .replace("an ", "")
        .replace("’s ", "")
        for keyphrase in keyphrases
    )


def filterKeyphrases(keyphrases):
    return (keyphrase for keyphrase in keyphrases if len(keyphrase.split(" ")) > 2)


def getCounts(keyphrases):
    return Counter(keyphrases).most_common(10)

def getKeyphrases(paragraphs):
    return [keyphrase for keyphrase, count in getCounts(filterKeyphrases(cleanKeyphrases(getComprehend(paragraphs))))]


""" Lambda """


def lambda_handler(event, context):
    # Extract url
    data = json.loads(json.dumps(event))
    payload = data["payload"]

    # Fetch article
    article = getArticle(payload)

    # Process text
    text = article["text"]
    paragraphs = getParagraphs(text)
    sentiments = getSentiments(paragraphs)
    keyphrases = getKeyphrases(paragraphs)

    return dict(status="ok", keyphrases=keyphrases, sentiments=sentiments)
