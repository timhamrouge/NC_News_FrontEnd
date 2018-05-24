import React from "react";
import Article from "./Article";
import Header from "./Header";
import Loading from "./Loading";

class SingleArticle extends React.Component {
  state = {
    article: {},
    loading: true
  };

  render() {
    let { loading, article } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <div className="card-body">
              <Article
                path={this.props.match.params.article_id}
                long={true}
                article={article}
              />
            </div>
          </div>
        )}
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
        this.setState({ article, loading: !this.state.loading });
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
