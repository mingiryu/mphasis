import React from "react";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
    Sentence: {
        lineHeight: 2,
        "&:hover": {
            textShadow: `yellow 1px 0 10px`
        }
    },
    Chips: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
    Highlight: {
        background: "yellow"
    }
}));

// https://gist.github.com/mlocati/7210513
const percentageToColor = (percentage, maxHue = 120, minHue = 0) => {
    const hue = percentage * (maxHue - minHue) + minHue;
    return `hsl(${hue}, 80%, 50%)`;
};

const getShape = n => {
    if (n > 0.8) {
        return "double-circle";
    } else if (n > 0.6) {
        return "open double-circle";
    } else if (n > 0.4) {
        return "open circle";
    } else if (n > 0.2) {
        return "circle";
    } else {
        return "dot";
    }
};

const getColor = n => {
    return percentageToColor((n + 1.0) / 2.0, 240, 0);
};

export default function Article(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        chips: [],
        load: false
    });

    const preset = props.preset;
    let article;
    if (preset) {
        article = require(`../data/${preset}`).data;
    } else {
        article = props.custom.data;
    }

    const handleDelete = prop => {
        setState({
            ...state,
            chips: state.chips.filter(chip => chip !== prop)
        });
    };

    const handleClick = prop => {
        setState({ ...state, chips: [...state.chips, prop] });
    };

    React.useEffect(() => {
        if (!state.load) {
            window.scrollTo(0, 0);
            setState({ ...state, load: true });
        }
    }, [state]);

    return (
        <Container maxWidth="md">
            <Box py={3}>
                <Typography gutterBottom variant="h4">
                    {props.title}
                </Typography>
                <Typography color="textSecondary">
                    {props.author ? (
                        <span>by {props.author}</span>
                    ) : (
                        <span></span>
                    )}
                </Typography>
            </Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Quick Look
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Summary
                    </Typography>
                    {article.summary.map(section => (
                        <Typography variant="body2" gutterBottom>
                            {section}
                        </Typography>
                    ))}
                    <Typography variant="subtitle1" color="textSecondary">
                        Keywords
                    </Typography>
                    <Box className={classes.Chips}>
                        {article.keywords.map(keyword => {
                            let on;
                            if (state.chips.includes(keyword)) {
                                on = {
                                    onDelete: handleDelete.bind(this, keyword)
                                };
                            } else {
                                on = {
                                    onClick: handleClick.bind(this, keyword)
                                };
                            }
                            return (
                                <Chip size="small" label={keyword} {...on} />
                            );
                        })}
                    </Box>
                </CardContent>
            </Card>
            <Box>
                {article.sentiments.map(paragraph => (
                    <Box my={2}>
                        {paragraph.map(sentence => {
                            const contains = state.chips.some(chip =>
                                sentence.sentence.toLowerCase().includes(chip)
                            );

                            return (
                                <Tooltip
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                    title={`Subjectivity: ${(
                                        sentence.subjectivity * 100
                                    ).toFixed(0)}% Polarity: ${(
                                        sentence.polarity * 100
                                    ).toFixed(0)}%`}
                                >
                                    <Typography
                                        className={`${classes.Sentence} ${
                                            contains ? classes.Highlight : ""
                                        }`}
                                        variant="body1"
                                        component="span"
                                        style={{
                                            textEmphasis: `${getShape(
                                                +sentence.subjectivity
                                            )} ${getColor(+sentence.polarity)}`,
                                            WebkitTextEmphasis: `${getShape(
                                                +sentence.subjectivity
                                            )} ${getColor(+sentence.polarity)}`
                                        }}
                                    >
                                        {`${sentence.sentence} `}
                                    </Typography>
                                </Tooltip>
                            );
                        })}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
