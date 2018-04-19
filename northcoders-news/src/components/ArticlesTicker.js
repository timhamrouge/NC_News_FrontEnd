import React from "react";
import Article from "./Article";

class ArticlesTicker extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="container">
        <div className="articles-ticker">
          <ul className="list-group">
            {this.state.articles.map(article => {
              return <Article article={article} key={article._id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("https://nc-news-timhamrouge.herokuapp.com/api/articles")
      .then(res => {
        return res.json();
      })
      .then(articlesObj => {
        this.setState({ articles: articlesObj.articles });
      });
  }
}

export default ArticlesTicker;
