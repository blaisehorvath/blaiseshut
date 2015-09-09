const React = require('react');

let article = React.createClass({
      render : function () {
        return (
                        <div className='well'>
                              <h2>{this.props.articleTitle}</h2>
                              <p>{this.props.articleText}</p>
                        </div>
            );
      }
});

module.exports = article;
