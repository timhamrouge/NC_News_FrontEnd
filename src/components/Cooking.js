import React from "react";
import ArticlesTicker from "./ArticlesTicker";

class Cooking extends React.Component {
  render() {
    let { articles } = this.props;
    return <ArticlesTicker articles={articles} />;
  }
}

export default Cooking;
