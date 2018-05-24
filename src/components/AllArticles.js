import React from "react";
import { Header, Loading, ArticlesTicker } from "./index";

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
