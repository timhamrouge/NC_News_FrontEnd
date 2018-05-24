import React from "react";
import { Header, Loading, ArticlesTicker } from "./index";

class Cooking extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header context={"cooking"} />
            <ArticlesTicker articles={articles} />
          </div>
        )};
      </div>
    );
  }
}

export default Cooking;
