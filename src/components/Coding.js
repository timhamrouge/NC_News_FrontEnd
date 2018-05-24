import React from "react";

import { Header, Loading, ArticlesTicker } from "./index";

class Coding extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header context={"coding"} />
            <ArticlesTicker articles={articles} />
          </div>
        )};
      </div>
    );
  }
}

export default Coding;
