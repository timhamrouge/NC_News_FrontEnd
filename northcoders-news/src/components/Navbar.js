import React from "react";
import "./Navbar.css";

// "https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png" N logo

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
      </nav>
    );
  }
}

export default Navbar;
