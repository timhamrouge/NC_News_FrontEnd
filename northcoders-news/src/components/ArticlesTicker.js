import React from "react";
import Article from "./Article";
import { Link, Route } from "react-router-dom";

class ArticlesTicker extends React.Component {
  state = {
    articleFocus: false,
    article: {}
  };
  render() {
    const { articleFocus, article } = this.state;
    return (
      <div className="container">
        <div className="articles-ticker">
          {articleFocus ? (
            <Route
              path={`/articles/${article._id}`}
              render={props => (
                <Article long={true} article={article} key={article._id} />
              )}
            />
          ) : (
            <ul className="list-group">
              {this.props.articles.map(article => {
                return (
                  <Article
                    long={false}
                    article={article}
                    key={article._id}
                    getThisArticle={this.getThisArticle}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
  getThisArticle = article => {
    this.setState({ articleFocus: !this.state.articleFocus, article });
  };
}

export default ArticlesTicker;
