import React from "react";

class User extends React.Component {
  render() {
    console.log(this.props.user);
    const { avatar_url, username, name } = this.props.user;
    return (
      <div className="user">
        <li className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <div className="row">
              <img src={avatar_url} width="50" height="50" />
              <h5 className="mb-1">{username}</h5>
            </div>
          </div>
          {/* <small>
            Posted by: {article.created_by} in {article.belongs_to}
          </small> */}
          {/* <div className="row">{article.body.slice(0, 200)}...</div> */}
        </li>
      </div>
    );
  }
}

export default User;
