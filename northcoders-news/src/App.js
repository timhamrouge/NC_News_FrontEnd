import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="container-fluid"> */}
          <Navbar />
          <Header />
          <Route exact path="/" component={ArticlesTicker} />
          <Route path="/hello" component={Hello} />
          {/* </div> */}
        </div>
      </Router>
    );
  }
}

class Hello extends Component {
  render() {
    return <div>HI TIM</div>;
  }
}

export default App;
