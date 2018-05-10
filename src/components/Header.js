import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    let { context } = this.props;
    return (
      <div className="page-header">
        <img
          src={this.headerGetter(context)}
          width="100%"
          height="100%"
          alt="header_img"
        />
      </div>
    );
  }

  headerGetter = context => {
    return context === "football"
      ? "https://s9.postimg.cc/a8ewtw85r/NC_News_Coding.jpg"
      : context === "cooking"
        ? "https://s9.postimg.cc/ds0ujpilb/NC_News_Cooking.jpg"
        : context === "coding"
          ? "https://s9.postimg.cc/6osz43kvj/NC_News_Football.jpg"
          : "https://s18.postimg.cc/ok9qaxgwp/NC_News_NC.png";
  };
}

export default Header;
