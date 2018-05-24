import React, { Component } from "react";
import { sample } from "lodash";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";
import UsersList from "./components/UsersList";
import SingleArticle from "./components/SingleArticle";
import HomePage from "./components/HomePage";
import Coding from "./components/Coding";
import Cooking from "./components/Cooking";
import Football from "./components/Football";
import AllArticles from "./components/AllArticles";

class App extends Component {
  state = {
    articles: [],
    loading: true,
    // articleLength: false,
    selectedArticle: {}
  };
  render() {
    const { articles, selectedArticle, loading } = this.state;
    return (
      <Router>
        <div className="App">
          {/* {console.log(this.state)} */}
          <Navbar
            loading={loading}
            pickRandomArticle={this.pickRandomArticle}
          />

          <Route path="/articles/:article_id" component={SingleArticle} />
          <Route
            exact
            path="/"
            render={props => <HomePage loading={loading} articles={articles} />}
          />
          <Route
            exact
            path="/coding"
            render={props => (
              <Coding
                loading={loading}
                articles={articles.filter(article => {
                  return article.belongs_to === "Coding";
                })}
              />
            )}
          />
          <Route
            exact
            path="/cooking"
            render={props => (
              <Cooking
                loading={loading}
                articles={articles.filter(article => {
                  return article.belongs_to === "Cooking";
                })}
              />
            )}
          />
          <Route
            exact
            path="/football"
            render={props => (
              <Football
                loading={loading}
                articles={articles.filter(article => {
                  return article.belongs_to === "Football";
                })}
              />
            )}
          />
          <Route path="/users" component={UsersList} />
          <Route
            exact
            path="/articles"
            render={props => (
              <AllArticles loading={loading} articles={articles} />
            )}
          />
        </div>
      </Router>
    );
  }

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
}

export default App;
