import React, { Component } from "react";
import { sample } from "lodash";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";
import UsersList from "./components/UsersList";
import SingleArticle from "./components/SingleArticle";

class App extends Component {
  state = {
    articles: [],
    loading: true,
    // articleLength: false,
    selectedArticle: {}
  };
  render() {
    const { articles, selectedArticle } = this.state;
    return (
      <Router>
        <div className="App">
          {/* {console.log(this.state)} */}
          <Navbar
            loading={this.state.loading}
            pickRandomArticle={this.pickRandomArticle}
          />
          <Header />
          {/* <Route exact path="/" component={ArticlesTicker} /> */}
          <Route exact path="/articles/:article_id" component={SingleArticle} />

          <Route path="/users" component={UsersList} />
          <Route
            exact
            path="/articles"
            render={props => <ArticlesTicker articles={articles} />}
          />
        </div>
      </Router>
    );
  }

  // {articleFocus ? (
  //           <Route
  //             path={`/articles/${article._id}`}
  //             render={props => (
  //               <Article long={true} article={article} key={article._id} />
  //             )}
  //           />
  //         ) : (

  componentDidMount() {
    fetch("https://nc-news-timhamrouge.herokuapp.com/api/articles")
      .then(res => {
        return res.json();
      })
      .then(articlesObj => {
        this.setState({
          articles: articlesObj.articles,
          loading: !this.state.loading
        });
      });
  }

  pickRandomArticle = () => {
    return sample(this.state.articles)._id;
  };

  //   getMostPopularArticles = () => {
  //     let mostTalkedAbout = this.state.articles.sort((a, b) => {
  //       console.log(a, b);
  //       return a.comments - b.comments;
  //     });
  //     return this.setState({ mostTalkedAbout });
  //   };
}

export default App;
