import React from "react";
import ArticlesTicker from "./ArticlesTicker";

class Coding extends React.Component {
  render() {
    let { articles } = this.props;
    return <ArticlesTicker articles={articles} />;
  }
}

export default Coding;
