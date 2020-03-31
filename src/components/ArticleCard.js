import React from 'react'
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function ArticleCard(props) {
    return (
        <Card
            className="Card"
            variant="outlined"
            style={{ marginTop: 20, marginBottom: 20 }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {props.title}
                </Typography>
                <Typography color="textSecondary">by {props.author}</Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                    {props.children}
                </Typography>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    disableElevation
                    component={Link}
                    to={props.link}
                >
                    View Article
                </Button>
            </CardContent>
        </Card>
    )
}
