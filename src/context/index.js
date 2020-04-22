import React from "react";

import { fetchArticle, fetchData } from "../utils/fetchHelper"

const Context = React.createContext();
const { Provider, Consumer } = Context

class ContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "",
            article: null,
            data: null,
            status: 0,
            chips: [],
        }
    }

    handleChange = (event) => {
        this.setState({ url: event.target.value });
        event.preventDefault();
    }

    handleClick = (target, type) => {
        if (type === "delete") {
            this.setState({ chips: this.state.chips.filter(chip => chip !== target) });
        } else {
            this.setState({ chips: [...this.state.chips, target] });
        }
    }

    getCustom = () => {
        if (!this.state.status) {
            fetchArticle(this.state.url)
                .then(article => {
                    this.setState({ article: article.article });
                    return fetchData(article);
                })
                .then(data => {
                    this.setState({ data: data, status: 1 });
                    return null;
                })
                .catch(err => {
                    this.setState({ status: -1 });
                    console.warn(err);
                })
        }
    }

    resetData = () => {
        this.setState({
            url: "",
            article: null,
            data: null,
            status: 0,
            chips: [],
        })
    }

    showExample = () => {
        this.setState({status: 1});
    }

    render() {
        return <Provider value={{
            ...this.state,
            handleChange: this.handleChange,
            handleClick: this.handleClick,
            getCustom: this.getCustom,
            resetData: this.resetData,
            showExample: this.showExample
        }}>{this.props.children}</Provider>;
    }
}

export { Context, ContextProvider, Consumer as ContextConsumer };