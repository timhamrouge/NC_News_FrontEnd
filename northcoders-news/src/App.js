import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";
import UsersList from "./components/UsersList";
import RandomArticle from "./components/RandomArticle";

class App extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="container-fluid"> */}
          <Navbar />
          <Header />
          <Route exact path="/" component={ArticlesTicker} />
          <Route exact path="/random" component={RandomArticle} />
          <Route path="/users" component={UsersList} />
          {/* </div> */}
        </div>
      </Router>
    );
  }
}

// <Route exact path="/" render={props => <ArticlesTicker articles={articles} />} />;

class Hello extends Component {
  render() {
    return <div>HI TIM</div>;
  }
}

export default App;
