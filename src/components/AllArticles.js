import React from "react";
import Header from "./Header";
import ArticlesTicker from "./ArticlesTicker";

class AllArticles extends React.Component {
  render() {
    let { articles } = this.props;
    return (
      <div>
        <Header />
        <ArticlesTicker articles={articles} />
      </div>
    );
  }
}

export default AllArticles;
