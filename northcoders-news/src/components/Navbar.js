import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark">
        <Link className="navbar-brand" to="/">
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            to="/"
            alt="N Logo"
          />
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item navbar-text">
            <Link to="/random" className="nav-Link">
              Random
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link to="/articles" className="nav-Link">
              All
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link to="/users" className="nav-Link">
              Users
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse" />
        <span className="navbar-text">Welcome to NC News!</span>
      </nav>
    );
  }
}
export default Navbar;
