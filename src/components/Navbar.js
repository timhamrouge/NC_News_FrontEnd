import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { codingID: "", cookingID: "", footballID: "" };
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark">
        <Link className="navbar-brand nav-link" to="/">
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            to="/"
            alt="N Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/articles">
              All
            </Link>
            <Link
              className="nav-item nav-link"
              to={`/articles/${!this.props.loading && this.handleRandom()}`}
            >
              Random
            </Link>
            <Link to="/users" className="nav-item nav-link">
              Users
            </Link>
            <div className="nav-item nav-link dropdown">
              <div className="dropdown show">
                <a
                  className="dropdown-toggle"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/coding" className="dropdown-item">
                    Coding
                  </Link>
                  <Link to="/cooking" className="dropdown-item">
                    Cooking
                  </Link>
                  <Link to="/football" className="dropdown-item">
                    Football
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  handleRandom = () => {
    return this.props.pickRandomArticle();
  };
}
export default Navbar;
