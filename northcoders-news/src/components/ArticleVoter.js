import React from "react";
import "./ArticleVoter.css";

class ArticleVoter extends React.Component {
  // state = {
  //   votes: this.props.votes
  // };
  render() {
    let votes = this.props.votes;
    return (
      <div className="article-voter">
        <p>
          <div className="up-arrow">
            <i class="fas fa-chevron-up" />
          </div>
          <div className="votes">{votes}</div>
          <div className="down-arrow">
            <i class="fas fa-chevron-down" />
          </div>
        </p>
      </div>
    );
  }
}

export default ArticleVoter;
