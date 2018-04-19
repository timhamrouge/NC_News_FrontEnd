import React from "react";
import "./Voter.css";

class Voter extends React.Component {
  render() {
    let votes = this.props.votes;
    return (
      <div className="voter">
        <div className="up-arrow">
          <i className="fas fa-chevron-up" />
        </div>
        <div className="votes">{votes}</div>
        <div className="down-arrow">
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    );
  }
}

export default Voter;
