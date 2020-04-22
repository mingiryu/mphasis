import React from 'react'
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import ArticleCard from "../components/ArticleCard";

const Examples = () => {
    return (
        <Container maxWidth="md">
            <Button variant="outlined" color="secondary" component={Link} to="/" style={{marginTop: "1em"}}>Back to home page</Button>
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
    )
}
export default Examples