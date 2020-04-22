import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

import { getColor, getShape } from "../utils/sentimentHelper"

const useStyles = makeStyles(theme => ({
    sentence: {
        lineHeight: 2,
        "&:hover": {
            textShadow: `yellow 1px 0 10px`
        }
    },
    highlight: {
        background: "yellow"
    },
}));

const Sentence = ({ sentence, sentiment, chips }) => {
    const classes = useStyles();

    if (!sentiment || !sentence) return null;
    const contains = chips.some(chip => sentence.toLowerCase().includes(chip.toLowerCase()));
    
    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={`Subjectivity: ${(sentiment.subjectivity * 100).toFixed(0)}% Polarity: ${(sentiment.polarity * 100).toFixed(0)}%`}
        >
            <Typography
                className={`${classes.sentence} ${contains ? classes.highlight : ""}`}
                variant="body1"
                component="span"
                style={{
                    textEmphasis: `${getShape(+sentiment.subjectivity)} ${getColor(+sentiment.polarity)}`,
                    WebkitTextEmphasis: `${getShape(+sentiment.subjectivity)} ${getColor(+sentiment.polarity)}`
                }}
            >
                {`${sentence}. `}
            </Typography>
        </Tooltip>
    )
}

const Paragraph = ({ paragraph, sentiment, chips }) => {
    const sentences = paragraph.trim('. ').split('. ');
    return (
        <Box my={2}>
            {sentiment.map((value, idx) => {
                return <Sentence key={idx} sentence={sentences[idx]} sentiment={value} chips={chips} />;
            })}
        </Box>
    )
}

const Content = ({ text, sentiments, chips }) => {
    const paragraphs = text.trim('\n').split("\n\n");
    return (
        <Box>
            {sentiments.map((sentiment, idx) => (
                <Paragraph key={idx} paragraph={paragraphs[idx]} sentiment={sentiment} chips={chips} />
            ))}
        </Box>
    )
}
export default Content