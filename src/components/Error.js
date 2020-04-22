import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Error = () => {
    return (
        <Container maxWidth="md" disableGutters>
            <Card
                className="Card"
                variant="outlined"
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    minWidth: 300,
                    transform: "translate(-50%, -50%)",
                }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Something went wrong...
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom >
                       Please try again. Thank you!
                    </Typography>
                    <Button size="small" color="primary" variant="contained" component={Link} to="/">
                        back to the main page
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
export default Error