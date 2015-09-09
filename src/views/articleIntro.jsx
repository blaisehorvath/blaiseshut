const React = require('react');

let article = React.createClass({
      render : function () {
        return (
                        <div className='well'>
                              <h2>{this.props.articleTitle}</h2>
                              <p>{this.props.articleText}</p>
                              <div className="col-sm-8"></div>
                              <div className="col-sm-4">
                                    <button type="button" className="btn btn-link">More</button>
                              </div>
                               <div className="clearfix visible-lg"></div>
                        </div>
            );
      }
});

module.exports = article;
