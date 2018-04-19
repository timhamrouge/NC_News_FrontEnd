import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";

class App extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    let articles = this.state.articles;
    return (
      <Router>
        <div className="App">
          {/* <div className="container-fluid"> */}

          <Navbar />
          <Header />
          <Route
            exact
            path="/"
            render={props => <ArticlesTicker articles={articles} />}
          />
          <Route path="/users" component={Hello} />
          {/* </div> */}
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

class Hello extends Component {
  render() {
    return <div>HI TIM</div>;
  }
}

export default App;
