import React from "react";

import { Container } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

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
        </Container>
    );
}
