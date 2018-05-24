import React, { Component } from "react";
import Header from "./Header";
import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="card-body">
          <div className="loadWheel" />
        </div>
      </div>
    );
  }
}

export default Loading;
