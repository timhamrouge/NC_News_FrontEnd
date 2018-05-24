import React from "react";
import { Header, Loading, ArticlesTicker } from "./index";

class Football extends React.Component {
  render() {
    let { articles, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header context={"football"} />
            <ArticlesTicker articles={articles} />
          </div>
        )};
      </div>
    );
  }
}

export default Football;
