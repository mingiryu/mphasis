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
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom >
                       It's very likely that this happened due to a timeout from processing a significantly large text.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom >
                       Please try again with a smaller portion of the text. Thank you!
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
