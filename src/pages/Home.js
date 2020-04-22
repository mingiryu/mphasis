import React from 'react'
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { ContextConsumer } from "../context"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center"
    },
    form: {
        margin: "3em 0 1em 0",
        width: "75%"
    },
    button: {
        margin: "0.5em 0",
        borderRadius: "3em",
        width: "75%",
        textTransform: "none",
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <ContextConsumer>
            {(context) => (
                <Container className={classes.root} maxWidth="xs">
                    <Typography variant="h2">Mphasis</Typography>
                    <Typography variant="body2" gutterBottom>Read with NLP &amp; visualization</Typography>

                    <FormControl className={classes.form} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Enter Article URL
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={context.url}
                            onChange={context.handleChange}
                            labelWidth={130}
                        />
                    </FormControl>

                    <Button className={classes.button} size="large" variant="contained" color="primary" component={Link} to="/custom">CREATE ARTICLE</Button>
                    <Button className={classes.button} size="large" color="secondary" component={Link} to="/example">See an example <ArrowForwardIosIcon fontSize="small"/></Button>
                </Container>
            )}

        </ContextConsumer>
    )
}
export default Home