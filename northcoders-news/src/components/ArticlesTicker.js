import React from "react";
import Article from "./Article";

class ArticlesTicker extends React.Component {
  // state = {
  //   articles: []
  // };
  render() {
    return (
      <div className="articles-ticker">
        Hello, This will be the Articles Ticker
        <ul>
          {this.props.articles.map(article => {
            return <Article article={article} />;
          })}
        </ul>
      </div>
    );
  }
  // componentDidMount() {
  //   fetch("https://nc-news-timhamrouge.herokuapp.com/api/articles")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(articlesObj => {
  //       this.setState({ articles: articlesObj.articles });
  //     });
  // }
}

export default ArticlesTicker;
