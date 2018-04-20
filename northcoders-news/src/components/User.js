import React from "react";
import "./User.css";
const faker = require("faker/locale/en_GB");

class User extends React.Component {
  render() {
    const { avatar_url, username } = this.props.user;
    return (
      <div className="user">
        <li className="list-group-item border-0">
          <div className="card border-0">
            <div className="row">
              <div className="col-1">
                <div className="card-avatar">
                  <img
                    src={avatar_url}
                    width="80"
                    height="80"
                    alt="user-avatar"
                  />
                </div>
              </div>
              <div className="col-11">
                <div className="card-body">
                  <h3 className="card-title-user">{username}</h3>
                  <h6>/{username}</h6>

                  <div className="card fakebio">
                    {faker.fake("{{lorem.sentences}}")}
                  </div>
                </div>
              </div>
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
