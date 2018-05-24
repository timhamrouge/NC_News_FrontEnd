import React from "react";
import { Header, Loading, ArticlesTicker } from "./index";

import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const mostPopular = this.props.articles
      .sort((a, b) => {
        return b.votes - a.votes;
      })
      .slice(0, 1);
    const mostTalkedAbout = this.props.articles
      .sort((a, b) => {
        return b.comments - a.comments;
      })
      .slice(0, 1);

    return (
      <div>
        <Header />
        {this.props.loading ? (
          <Loading />
        ) : (
          <div className="mx-auto">
            <h1 className="home-header">{`<WELCOME TO NORTHCODERS NEWS! />`}</h1>
            <p />
            <h3 className="sub-cats">Most Popular Article:</h3>
            <div>
              <ArticlesTicker articles={mostPopular} />
            </div>
            <h3 className="sub-cats">Most Talked About Article:</h3>
            <div>
              <ArticlesTicker articles={mostTalkedAbout} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default HomePage;
