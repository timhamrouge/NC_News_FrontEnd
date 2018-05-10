import React from "react";
import Header from "./Header";
import ArticlesTicker from "./ArticlesTicker";

class Coding extends React.Component {
  render() {
    let { articles } = this.props;
    return (
      <div>
        <Header context={"coding"} />
        <ArticlesTicker articles={articles} />;
      </div>
    );
  }
}

export default Coding;
