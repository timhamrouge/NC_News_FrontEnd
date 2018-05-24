import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import ArticlesTicker from "./ArticlesTicker";

class AllArticles extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        <Header />
        {loading ? <Loading /> : <ArticlesTicker articles={articles} />}
      </div>
    );
  }
}

export default AllArticles;
