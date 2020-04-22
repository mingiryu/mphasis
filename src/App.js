import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import { ContextProvider } from "./context/"
import theme from "./theme/"
import Home from "./pages/Home";
import Article from "./components/Article";

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ContextProvider>
                    <HashRouter>
                        <Switch>
                            <Route path="/custom">
                                <Article />
                            </Route>
                            <Route path="/example">
                                <Article example/>
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </HashRouter>
                </ContextProvider>
            </ThemeProvider>
        );
    }
}
export default App;
