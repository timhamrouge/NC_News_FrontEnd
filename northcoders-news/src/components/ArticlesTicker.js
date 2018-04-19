import React from "react";
import Article from "./Article";

class ArticlesTicker extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="articles-ticker">
          <ul className="list-group">
            {this.props.articles.map(article => {
              return (
                <Article length={false} article={article} key={article._id} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArticlesTicker;
