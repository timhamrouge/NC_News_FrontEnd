import React from "react";
import "./Voter.css";
import axios from "axios";

class Voter extends React.Component {
  state = {
    votes: 0
  };
  static getDerivedStateFromProps(newState) {
    return newState;
  }
  render() {
    const { votes } = this.state;
    return (
      <div className="voter">
        <button onClick={() => this.changeVote("up")}>
          <div className="up-arrow">
            <i className="fas fa-chevron-up" />
          </div>
        </button>
        <div className="votes">{votes}</div>
        <button onClick={() => this.changeVote("down")}>
          <div className="down-arrow">
            <i className="fas fa-chevron-down" />
          </div>
        </button>
      </div>
    );
  }
  changeVote = query => {
    const path = this.props.path;
    return axios
      .put(
        `https://nc-news-timhamrouge.herokuapp.com/api/${path}?vote=${query}`
      )
      .then(res => {
        let votes = {};
        if (path.includes("comments")) {
          votes = res.data.comment.votes;
        }
        if (path.includes("articles")) {
          votes = res.data.article.votes;
        }
        this.setState({ votes });
      });
  };
}

export default Voter;
