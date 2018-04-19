import React from "react";
import Article from "./Article";
const { sample } = require("lodash");

class RandomArticle extends React.Component {
  render() {
    console.log(this.props.articles);
    return (
      <div className="container">
        <div className="card-body">
          <Article length={true} article={sample(this.props.articles)} />
        </div>
      </div>
    );
  }
}

export default RandomArticle;
