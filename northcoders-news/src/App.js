import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";
import UsersList from "./components/UsersList";
import RandomArticle from "./components/RandomArticle";

class App extends Component {
  state = {
    articles: [],
    loading: true,
    articleLength: 0
  };
  render() {
    const { articles } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          {/* <Route exact path="/" component={ArticlesTicker} /> */}
          <Route
            exact
            path="/random"
            render={props => <RandomArticle articles={articles} />}
          />
          <Route path="/users" component={UsersList} />
          <Route
            path="/articles"
            render={props => <ArticlesTicker articles={articles} />}
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
        this.setState({ articles: articlesObj.articles });
      });
  }
}

export default App;
