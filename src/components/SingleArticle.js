import React from "react";
import Article from "./Article";
import Header from "./Header";

class SingleArticle extends React.Component {
  state = {
    article: {}
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="card-body">
            <Article
              path={this.props.match.params.article_id}
              long={true}
              article={this.state.article}
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(
      `https://nc-news-timhamrouge.herokuapp.com/api/articles/${
        this.props.match.params.article_id
      }`
    )
      .then(res => {
        return res.json();
      })
      .then(({ article }) => {
        this.setState({ article });
      });
  }
  componentWillReceiveProps(newProps) {
    if (
      newProps.match.params.article_id !== this.props.match.params.article_id
    ) {
      fetch(
        `https://nc-news-timhamrouge.herokuapp.com/api/articles/${
          newProps.match.params.article_id
        }`
      )
        .then(res => {
          return res.json();
        })
        .then(({ article }) => {
          this.setState({ article });
        });
    }
  }
}

export default SingleArticle;
