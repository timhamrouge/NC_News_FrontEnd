import React from "react";
import ArticleVoter from "./ArticleVoter";

class Article extends React.Component {
  render() {
    let article = this.props.article;
    return (
      <div className="article">
        <li className="list-group-item border-0">
          <div className="card">
            <div className="row">
              <div className="col-2">
                <div className="card-votes">
                  <ArticleVoter votes={article.votes} />
                </div>
              </div>
              <div className="col-10">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <small>
                    Posted by: {article.created_by} in /{article.belongs_to}
                  </small>
                  <div className="body">{article.body}</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Article;
