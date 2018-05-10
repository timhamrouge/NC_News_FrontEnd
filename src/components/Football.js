import React from "react";
import Header from "./Header";
import ArticlesTicker from "./ArticlesTicker";

class Football extends React.Component {
  render() {
    let { articles } = this.props;
    return (
      <div>
        <Header context={"football"} />
        <ArticlesTicker articles={articles} />
      </div>
    );
  }
}

export default Football;
