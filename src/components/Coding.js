import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import ArticlesTicker from "./ArticlesTicker";

class Coding extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header context={"coding"} />
            <ArticlesTicker articles={articles} />
          </div>
        )};
      </div>
    );
  }
}

export default Coding;
