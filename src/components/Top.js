import React from 'react'
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Dialog from "@material-ui/core/Dialog";

import Info from "./Info";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

function Top() {
    const classes = useStyles();

    const [dialog, setDialog] = React.useState(false);

    const handleOpen = () => {
        setDialog(true);
    };

    const handleClose = () => {
        setDialog(false);
    };

    return (
        <React.Fragment>
            <Dialog open={dialog} onClose={handleClose} scroll="body">
                <Info />
            </Dialog>

            <div className={classes.root}>
                <Button variant="outlined" color="primary" component={Link} to="/" style={{ marginTop: "1em" }}>Back to home page</Button>
                <IconButton color="default" aria-label="help" onClick={handleOpen}>
                    <HelpOutlineIcon fontSize="large" />
                </IconButton>
            </div>
        </React.Fragment>
    )
}

export default Top
