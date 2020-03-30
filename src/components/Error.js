import React from "react";

import { Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Error(props) {
    return (
        <Container maxWidth="md" disableGutters>
            <Card
                className="Card"
                variant="outlined"
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <CardContent>
                <Typography gutterBottom variant="h5">
                    Something went wrong...
                </Typography>

                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    disableElevation
                    onClick={props.handleError}
                >
                    Go back to the main page
                </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
