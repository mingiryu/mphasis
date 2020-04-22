import React from "react";

import Container from '@material-ui/core/Container';

import { Context } from "../context";

import Top from "./Top"
import Title from "./Title";
import Quicklook from "./Quicklook";
import Content from "./Content";
import Progress from "./Progress";
import Error from "./Error";

class Article extends React.Component {
    componentDidMount() {
        if (!this.props.example && this.context.url && !this.context.article && !this.context.data) {
            this.context.getCustom()
        }
    }

    render() {
        var article = this.props.example ? require(`../data/article`) : this.context.article;
        var data = this.props.example ? require(`../data/data`) : this.context.data;

        if (this.context.status === -1 || (!this.context.url && !article && !data)) {
            return <Error />
        } else if (this.props.example || (this.context.status && this.context.data && this.context.article)) {
            return (
                <Container maxWidth="md">
                    <Top />
                    <Title title={article.title} author={article.authors[0]} />
                    <Quicklook summary={null} keyphrases={data.keyphrases} />
                    <Content text={article.text} sentiments={data.sentiments} chips={this.context.chips} />
                </Container>
            )
        } else {
            return <Progress />
        }
    }
}
Article.contextType = Context
export default Article