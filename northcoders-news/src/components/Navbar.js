import React from "react";
import "./Navbar.css";

// "https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png" N logo

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark">
        <a className="navbar-brand" href="#">
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link">hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">hello</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
