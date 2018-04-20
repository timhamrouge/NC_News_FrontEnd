import React from "react";
import "./Article.css";
import Voter from "./Voter";
import { Link } from "react-router-dom";

class Article extends React.Component {
  render() {
    let long = this.props.long;
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
                  {this.setHeader(long, article)}
                  <small>
                    Posted by: {article.created_by} in /{article.belongs_to}
                  </small>
                  <div className={`${this.lengthGetter(long)}`}>
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
  lengthGetter = long => {
    return !long ? "body-snippet" : "body";
  };
  setThisArticle = () => {
    return this.props.getThisArticle(this.props.article);
  };
  setHeader = (long, article) => {
    return long ? (
      <h5 className="card-title">{article.title}</h5>
    ) : (
      <Link to={`/articles/${article._id}`}>
        <h5 onClick={this.setThisArticle} className="card-title">
          {article.title}
        </h5>
      </Link>
    );
  };
}

export default Article;
