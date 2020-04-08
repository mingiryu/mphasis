import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import {
    createMuiTheme,
    ThemeProvider,
    responsiveFontSizes
} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Home from "./components/Home";
import Article from "./components/Article";
import Error from "./components/Error";

const INVOKE_URL =
    "https://vbjdr9c3x8.execute-api.us-east-1.amazonaws.com/prod";

let theme = createMuiTheme({
    typography: {
        fontFamily: "Times",
        subtitle1: {
            fontSize: 14
        },
        body1: {
            fontSize: 18
        },
        h4: {
            fontSize: 38,
            fontWeight: 1500
        }
    }
});
theme = responsiveFontSizes(theme);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author: "",
            content: "",
            status: "",
            data: ""
        };
    }

    handleOnClick = event => {
        console.log(this.state);
        this.setState({ status: "inprogress" });

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                payload: this.state.content
            })
        };

        //console.log(requestOptions.body);

        fetch(INVOKE_URL, requestOptions)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    status: "completed",
                    data: data
                })
            )
            .catch(err => {
                this.setState({ status: "failed" });
                console.log(err);
            });

        event.preventDefault();
    };

    handleChange = prop => event => {
        this.setState({ prop, [prop]: event.target.value });
        event.preventDefault();
    };

    handleError = event => {
        this.setState({ status: "" });
        event.preventDefault();
    };

    render() {
        const status = this.state.status;
        if (status === "completed" && this.state.data.result === "Success") {
            //console.log(this.state.data);
            return (
                <ThemeProvider theme={theme}>
                    <Article
                        custom={this.state.data}
                        title={this.state.title}
                        author={this.state.author}
                    />
                </ThemeProvider>
            );
        } else if (status === "inprogress") {
            return (
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    <CircularProgress />
                </div>
            );
        } else if (
            status === "failed" ||
            (status === "completed" && this.state.data.result !== "Success")
        ) {
            console.log(this.state.data);
            return (
                <ThemeProvider theme={theme}>
                    <Error handleError={this.handleError} />
                </ThemeProvider>
            );
        } else {
            return (
                <HashRouter>
                    <ThemeProvider theme={theme}>
                        <Switch>
                            <Route path="/TheEconomist">
                                <Article
                                    preset="TheEconomist"
                                    title="How to survive a plague When Athenians feared a disease would wreck their democracy"
                                    author="The Economist"
                                />
                            </Route>
                            <Route path="/ArtsAndLetters">
                                <Article
                                    preset="ArtsAndLetters"
                                    title="It’s All Just Beginning"
                                    author="Justin E. H. Smith, The Point Magazine"
                                />
                            </Route>
                            <Route path="/LATimes">
                                <Article
                                    preset="LATimes"
                                    title="Deep underwater, submariners are likely unaware of pandemic roiling the world above"
                                    author="Los Angeles Times"
                                />
                            </Route>
                            <Route path="/Bloomberg">
                                <Article
                                    preset="Bloomberg"
                                    title="Bosses Panic-Buy Spy Software to Keep Tabs on Remote Workers"
                                    author="Polly Mosendz and Anders Melin, Bloomberg"
                                />
                            </Route>
                            <Route path="/WHO">
                                <Article
                                    preset="WHO"
                                    title="WHO Director-General's opening remarks at the media briefing on COVID-19 - 11 March 2020"
                                    author="World Health Organization"
                                />
                            </Route>
                            <Route path="/CIRES">
                                <Article
                                    preset="CIRES"
                                    title="International Ozone Treaty Stops Changes in Southern Hemisphere Winds"
                                    author="Cooperative Institute for Research in Environmental Sciences at the University of Colorado Boulder"
                                />
                            </Route>
                            <Route path="/NYPost">
                                <Article
                                    preset="NYPost"
                                    title="Brooklyn guy uses drone to hit on a gal during coronavirus lockdown"
                                    author="Kirsten Fleming, New York Post"
                                />
                            </Route>
                            <Route path="/TheScientist">
                                <Article
                                    preset="NYPost"
                                    title="Taller People More Prone to Cancer"
                                    author="Abby Olena, The Scientist Magazine"
                                />
                            </Route>
                            <Route path="/">
                                <Home
                                    handleOnClick={this.handleOnClick}
                                    handleChange={this.handleChange}
                                    title={this.state.title}
                                    author={this.state.author}
                                    content={this.state.content}
                                />
                            </Route>
                        </Switch>
                    </ThemeProvider>
                </HashRouter>
            );
        }
    }
}
export default App;
