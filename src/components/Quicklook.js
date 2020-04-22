import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

import { ContextConsumer } from "../context"

const useStyles = makeStyles(theme => ({
    alert: {
        marginTop: 10, marginBottom: 10
    },
    chips: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
}));

const Quicklook = ({ summary, keyphrases }) => {
    const classes = useStyles();

    const SummaryView = () => {
        if (summary) {
            return (
                summary.map(section => (
                    <Typography variant="body2" gutterBottom>{section}</Typography>
                ))
            )
        } else {
            return <Alert className={classes.alert} severity="error">Automatic summarization has been disabled due to AWS SageMaker cost.</Alert>
        }
    }

    const KeyphrasesView = () => {
        return (
            <ContextConsumer>
                {(context) => (
                    <Box className={classes.chips}>
                        {keyphrases.map((keyphrase, idx) => {
                            keyphrase = keyphrase.toLowerCase();
                            const on = context.chips.includes(keyphrase) ? { onDelete: context.handleClick.bind(this, keyphrase, "delete") } : { onClick: context.handleClick.bind(this, keyphrase, "click") };
                            return (<Chip key={idx} size="small" label={keyphrase} {...on} />);
                        })}
                    </Box>
                )}
            </ContextConsumer>
        )
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" gutterBottom>Quick Look</Typography>
                <Typography variant="subtitle1" color="textSecondary">Summary</Typography>
                <SummaryView />

                <Typography variant="subtitle1" color="textSecondary">Key phrases</Typography>
                <KeyphrasesView />
            </CardContent>
        </Card>
    )
}
export default Quicklook
