import React from "react";
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
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{randomArticle.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              submitted by:&nbsp;
              {randomArticle.created_by}
            </h6>
            <p class="card-text">{randomArticle.body}</p>
            {/* <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a> */}
          </div>
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
