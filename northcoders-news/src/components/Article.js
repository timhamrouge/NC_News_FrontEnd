import React from "react";

class Article extends React.Component {
  render() {
    let article = this.props.article;
    return (
      <div className="article">
        <li className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <div className="row">
              <h5 className="mb-1">{article.title}</h5>
            </div>
          </div>
          <small>
            Posted by: {article.created_by} in {article.belongs_to}
          </small>
          <div className="row">{article.body.slice(0, 200)}...</div>
        </li>
      </div>
    );
  }
}

export default Article;
