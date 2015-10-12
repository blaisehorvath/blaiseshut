"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let ArticleIntro = React.createClass({
      render : function () {
        return (
                        <div className='well'>
                              <h2>{this.props.articleTitle}</h2>
                              <p>{this.props.articleText}</p>
                              <div className="col-xs-12">
                                    <button type="button" className="btn btn-link pull-right">More</button>
                              </div>
                              <div className="clearfix"></div>
                        </div>
            );
      }
});

module.exports = ArticleIntro;