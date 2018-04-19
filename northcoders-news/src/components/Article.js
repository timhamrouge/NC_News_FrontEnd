import React from "react";
import "./Article.css";
import Voter from "./Voter";
import { BrowserRouter as Link } from "react-router-dom";

class Article extends React.Component {
  render() {
    let length = this.props.length;
    let article = this.props.article;
    return (
      <div className="article">
        <li className="list-group-item border-0">
          <div className="card">
            <div className="row">
              <div className="col-2">
                <div className="card-votes">
                  <Voter votes={article.votes} />
                </div>
              </div>
              <div className="col-10">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <small>
                    Posted by: {article.created_by} in /{article.belongs_to}
                  </small>
                  <div className={`${this.lengthGetter(length)}`}>
                    {article.body}
                  </div>
                  <div className="card-footer border-0 bg-white text-muted">
                    <i className="fas fa-comment-alt" />&nbsp;
                    {article.comments} Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
  lengthGetter = length => {
    return !length ? "body-snippet" : "body";
  };
}

export default Article;
