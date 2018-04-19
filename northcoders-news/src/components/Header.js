import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <img
          src="https://blog.northcoders.com/hubfs/Northcoders%20July2017%20Theme/learn_to_code_manchester_original_second.png?t=1523003809093"
          width="100%"
          height="100%"
          alt="Northcoders Logo"
        />
      </div>
    );
  }
}

export default Header;
