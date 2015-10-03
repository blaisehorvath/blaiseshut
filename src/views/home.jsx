/*eslint-env jsx, node*/
const React = require("react");

/*eslint no-unused-vars: 0*/
let DefaultLayout = require("./layouts/default");
let ArticleIntro = require("./articleIntro");

let loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies vitae tellus in interdum. Maecenas ac egestas est, quis tristique eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent pharetra tincidunt ante quis auctor. Proin imperdiet est in tempor tristique. Morbi tortor urna, euismod id velit ut, laoreet cursus ex. Etiam consectetur tellus lacus, id pretium felis malesuada in. Fusce vestibulum quis orci vel ullamcorper. Vestibulum diam magna, sagittis non mi ut, volutpat dignissim diam. Nulla tristique dui posuere risus ullamcorper fringilla. Sed sed purus ut orci faucibus ultricies. Proin ultricies neque sed erat pretium, nec rutrum purus hendrerit. Donec lacus leo, varius in odio id, luctus auctor metus. ";

let HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
             <ArticleIntro articleTitle="Lorem ipsum dolor sit amet" articleText={loremipsum}></ArticleIntro>
             <ArticleIntro articleTitle="Nulla tristique dui posuere" articleText={loremipsum}></ArticleIntro>
             <ArticleIntro articleTitle="Proin ultricies neque sed" articleText={loremipsum}></ArticleIntro>
             <ArticleIntro articleTitle="Vestibulum diam magna" articleText={loremipsum}></ArticleIntro>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
