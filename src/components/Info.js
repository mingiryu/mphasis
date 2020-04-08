import React from "react";

import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Info() {
    return (
        <React.Fragment>
            <Typography gutterBottom variant="h5">
                Mphasis: A new way of reading articles through common NLP tasks and visualization
            </Typography>
            
            <Typography variant="subtitle1" color="textSecondary">
                Summarization
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                <li>
                    Extractive summarization based on state of the art Transfer
                    Learning and Transformer based models which use self
                    attention.
                </li>
                <li>
                    Served via a fully managed on-demand AWS instance using
                    Amazon SageMaker.
                </li>
            </Typography>

            <Typography variant="subtitle1" color="textSecondary">
                Keyphrase Extraction
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                <li>
                    Provided by Amazon Comprehend, a natural language processing
                    (NLP) service (SaaS) that uses machine learning to discover
                    insights from text.
                </li>
                <li>
                    Features sentence highlighting based on keywords selection.
                </li>
            </Typography>
            <Card
                className="Card"
                variant="outlined"
                style={{ marginBottom: 20 }}
            >
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item align="center" xs={12}>
                            <Chip
                                size="small"
                                label="selected keywords"
                                onDelete={() => {}}
                                onClick={() => {}}
                            />
                        </Grid>
                        <Grid item align="center" xs={12}>
                            <div>
                                <Typography
                                    variant="body1"
                                    style={{ background: "yellow" }}
                                    component="span"
                                >
                                    This sentence includes the selected
                                    keywords, so it is highlighted.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item align="center" xs={12}>
                            <Typography variant="body1">
                                This sentence does not, so it is not
                                highlighted.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Typography variant="subtitle1" color="textSecondary">
                Sentiment Analysis
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                <li>
                    Implemented with TextBlob, a popular Python library for
                    common natural language processing (NLP) tasks such as
                    part-of-speech tagging, noun phrase extraction, sentiment
                    analysis, and more.
                </li>
                <li>
                    The sentiment analysis consist of two properties: polarity
                    and subjectivity.
                </li>
                <ul style={{ marginTop: 0 }}>
                    <li>
                        The subjectivity is a percentage within the range [0%,
                        100%] where 0% is very objective and 100% is very
                        subjective.
                    </li>
                    <li>
                        The polarity is a percentage within the range [-100%,
                        100%] where -100% is very negative and 100% is very
                        positive.
                    </li>
                </ul>
            </Typography>

            <Card
                className="Card"
                variant="outlined"
                style={{ marginBottom: 20 }}
            >
                <CardContent>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                    >
                        Subjectivity
                    </Typography>
                    <Grid container justify="center" spacing={4}>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "dot black",
                                    WebkitTextEmphasis: "dot black"
                                }}
                            >
                                Very objective
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "circle black",
                                    WebkitTextEmphasis: "circle black"
                                }}
                            >
                                Objective
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "open circle black",
                                    WebkitTextEmphasis: "open circle black"
                                }}
                            >
                                Mixed
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "open double-circle black",
                                    WebkitTextEmphasis:
                                        "open double-circle black"
                                }}
                            >
                                Subjective
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "double-circle black",
                                    WebkitTextEmphasis: "double-circle black"
                                }}
                            >
                                Very subjective
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                    >
                        Polarity
                    </Typography>
                    <Grid container justify="center" spacing={4}>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "double-circle orangered",
                                    WebkitTextEmphasis:
                                        "double-circle orangered"
                                }}
                            >
                                Negative
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "double-circle lime",
                                    WebkitTextEmphasis: "double-circle lime"
                                }}
                            >
                                Neutral
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="span"
                                style={{
                                    textEmphasis: "double-circle royalblue",
                                    WebkitTextEmphasis:
                                        "double-circle royalblue"
                                }}
                            >
                                Positive
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Typography gutterBottom variant="h5">
                How to use
            </Typography>
            <Typography variant="subtitle1">
                <ul>
                    <li>
                        You can choose one from the samples below, or create
                        your own.
                    </li>
                    <li>To create your own, follow these steps:</li>
                    <ol>
                        <li>Fill in the title (optional).</li>
                        <li>Fill in the author (optional).</li>
                        <li>Fill in the content (required).</li>
                        <li>Press the CREATE ARTICLE button.</li>
                    </ol>
                </ul>
            </Typography>
        </React.Fragment>
    );
}
