import React from "react";
import "./Article.css";
import Voter from "./Voter";
import Comment from "./Comment";
import { Link } from "react-router-dom";

class Article extends React.Component {
  state = {
    comments: []
  };
  render() {
    let long = this.props.long;
    let article = this.props.article;
    let path = this.props.path;
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
                    {long ? (
                      <ul className="list-group">
                        {this.state.comments.map(comment => {
                          return (
                            <Comment
                              path={path}
                              comment={comment}
                              key={comment._id}
                            />
                          );
                        })}
                      </ul>
                    ) : (
                      <i className="fas fa-comment-alt">
                        {article.comments} Comments
                      </i>
                    )}
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

  componentDidMount() {
    fetch(
      `https://nc-news-timhamrouge.herokuapp.com/api/articles/${
        this.props.path
      }/comments`
    )
      .then(res => {
        return res.json();
      })
      .then(({ comments }) => {
        this.setState({ comments });
      });
  }
}

export default Article;
