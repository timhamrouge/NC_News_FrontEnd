import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    // <nav className="navbar navbar-expand navbar-dark fixed-top border-bottom">
    //
    //   <div className="collapse navbar-collapse">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <Link
    //           to={`/articles/${!this.props.loading && this.handleRandom()}`}
    //           className="nav-Link"
    //         >
    //           Random
    //         </Link>
    //       </li>
    //       <li className="nav-item">

    //       </li>
    //       <li className="nav-item">

    //       </li>

    //     </ul>
    //   </div>

    // </nav>

    return (
      <nav class="navbar navbar-expand navbar-dark">
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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
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
                  class="dropdown-toggle"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    Coding
                  </a>
                  <a class="dropdown-item" href="#">
                    Cooking
                  </a>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
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
