import React from "react";
import Article from "./Article";
const { sample } = require("lodash");

class RandomArticle extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-body">
          <Article long={true} article={sample(this.props.articles)} />
        </div>
      </div>
    );
  }
}

export default RandomArticle;
