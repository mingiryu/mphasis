import React from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Alert from "@material-ui/lab/Alert";

import Info from "./Info";
import ArticleCard from "./ArticleCard";

export default function Home(props) {
    return (
        <Container maxWidth="md">
            <Card
                className="Card"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
            >
                <CardContent>
                    <Info />
                    <Alert
                        severity="warning"
                        style={{ marginTop: 10, marginBottom: 10 }}
                    >
                        Processing of significantly large corpus, such as a
                        book, can lead to an error due to internal timeouts.
                    </Alert>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginBottom: 10 }}
                    >
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Title
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={props.title}
                            onChange={props.handleChange("title")}
                            labelWidth={60}
                            placeholder="Optional"
                            multiline
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginBottom: 10 }}
                    >
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Author
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={props.author}
                            onChange={props.handleChange("author")}
                            placeholder="Optional"
                            labelWidth={60}
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginBottom: 10 }}
                    >
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Content
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={props.content}
                            onChange={props.handleChange("content")}
                            labelWidth={60}
                            multiline
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna ac placerat vestibulum lectus. Sagittis aliquam malesuada bibendum arcu."
                        />
                    </FormControl>

                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        disableElevation
                        onClick={props.handleOnClick}
                    >
                        Create Article
                    </Button>
                </CardContent>
            </Card>

            <ArticleCard
                title="It’s All Just Beginning"
                author="Justin E. H. Smith, The Point Magazine"
                link="/ArtsAndLetters"
            >
                {require("../data/ArtsAndLetters").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="How to survive a plague When Athenians feared a disease would wreck their democracy"
                author="The Economist"
                link="/TheEconomist"
            >
                {require("../data/TheEconomist").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="Deep underwater, submariners are likely unaware of pandemic roiling the world above"
                author="Los Angeles Times"
                link="/LATimes"
            >
                {require("../data/LATimes").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="Bosses Panic-Buy Spy Software to Keep Tabs on Remote Workers"
                author="Polly Mosendz and Anders Melin, Bloomberg"
                link="/Bloomberg"
            >
                {require("../data/Bloomberg").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="WHO Director-General's opening remarks at the media briefing on COVID-19 - 11 March 2020"
                author="World Health Organization"
                link="/WHO"
            >
                {require("../data/WHO").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="International Ozone Treaty Stops Changes in Southern Hemisphere Winds"
                author="Cooperative Institute for Research in Environmental Sciences at the University of Colorado Boulder"
                link="/CIRES"
            >
                {require("../data/CIRES").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="Brooklyn guy uses drone to hit on a gal during coronavirus lockdown"
                author="Kirsten Fleming, New York Post"
                link="/NYPost"
            >
                {require("../data/NYPost").data.summary[0]}
            </ArticleCard>
            <ArticleCard
                title="Taller People More Prone to Cancer"
                author="Abby Olena, The Scientist Magazine"
                link="/TheScientist"
            >
                {require("../data/TheScientist").data.summary[0]}
            </ArticleCard>
            
        </Container>
    );
}
