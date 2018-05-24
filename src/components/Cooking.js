import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import ArticlesTicker from "./ArticlesTicker";

class Cooking extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header context={"cooking"} />
            <ArticlesTicker articles={articles} />
          </div>
        )};
      </div>
    );
  }
}

export default Cooking;
