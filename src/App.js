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
    const { articles, selectedArticle } = this.state;
    return (
      <Router>
        <div className="App">
          {/* {console.log(this.state)} */}
          <Navbar
            loading={this.state.loading}
            pickRandomArticle={this.pickRandomArticle}
          />
          {/* <Header /> */}
          {/* <Route exact path="/" component={ArticlesTicker} /> */}
          <Route path="/articles/:article_id" component={SingleArticle} />
          <Route
            exact
            path="/"
            render={props => <HomePage articles={articles} />}
          />
          <Route
            exact
            path="/coding"
            render={props => (
              <Coding
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
            render={props => <AllArticles articles={articles} />}
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
