import React from "react";

export default class Main extends React.Component {
    /***
     * This React class will handle the main page.
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /***
     * This function renders the article to the DIV with the id articles. Watch out, only put safe saninitized html to the body of the article.
     * @returns {XML}
     */
    render () {
        let articles = this.props.data.articles.map(
            (article) => {
                "use strict";
                return (
                    <div id="article" key={article.id}>
                        <h3>{article.title}</h3>
                        <p id="tags"> {'#'+article.tags.join(', #')}</p>
                        <div dangerouslySetInnerHTML={{__html : article.body}}></div>
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