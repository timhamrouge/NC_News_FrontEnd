import React from "react";
import Article from "./Article";

class ArticlesTicker extends React.Component {
  render() {
    return (
      <div className="articles-ticker">
        Hello, This will be the Articles Ticker
        <Article />
      </div>
    );
  }
}

export default ArticlesTicker;
