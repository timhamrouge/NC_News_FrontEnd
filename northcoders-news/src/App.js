import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticlesTicker from "./components/ArticlesTicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="container-fluid"> */}
        <Navbar />
        <Header />
        <ArticlesTicker />
        {/* </div> */}
      </div>
    );
  }
}

export default App;
