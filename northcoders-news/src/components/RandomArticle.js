import React from "react";
import ArticleWithBody from "./ArticleWithBody";
const { sample } = require("lodash");

class RandomArticle extends React.Component {
  state = {
    articles: [],
    randomArticle: {}
  };
  render() {
    let randomArticle = this.state.randomArticle;
    return (
      <div className="container">
        <div class="card-body">
          <ArticleWithBody article={this.state.randomArticle} />
        </div>
      </div>
    );
  }

  pickRandomArticle = articles => {
    let randomArticle = sample(articles);
    this.setState({ randomArticle });
  };

  componentDidMount() {
    fetch("https://nc-news-timhamrouge.herokuapp.com/api/articles")
      .then(res => {
        return res.json();
      })
      .then(articlesObj => {
        this.setState({ articles: articlesObj.articles });
      })
      .then(() => this.pickRandomArticle(this.state.articles));
  }
}

export default RandomArticle;
