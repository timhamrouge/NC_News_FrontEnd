import React from "react";

class Article extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="article">
        <li>{this.props.article.body}</li>
      </div>
    );
  }
}

// {
//   this.props.articles;
// }

export default Article;
