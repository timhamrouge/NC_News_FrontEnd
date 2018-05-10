import React from "react";
import Header from "./Header";
import ArticlesTicker from "./ArticlesTicker";

class Cooking extends React.Component {
  render() {
    let { articles } = this.props;
    return (
      <div>
        <Header context={"cooking"} />
        <ArticlesTicker articles={articles} />
      </div>
    );
  }
}

export default Cooking;
