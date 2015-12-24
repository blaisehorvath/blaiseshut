import React from "react";

export default class Main extends React.Component {
    /***
     * This React class will handle the main page.
     * @param props
     */
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props.data.articles);
        let articles = this.props.data.articles.map(
            (article) => {
                "use strict";
                return (
                    <div>
                        <h3>{article.title}</h3>
                        <div>{article.body}</div>
                        <p>{article.tags}</p>
                    </div>
                )
            }
        );
        return (
            <div id="articles">
                {articles}
            </div>
        )
    }
};