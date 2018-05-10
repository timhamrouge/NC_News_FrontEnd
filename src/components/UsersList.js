import React from "react";
import User from "./User";
import Header from "./Header";

class UsersList extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="users-list">
            <ul className="list-group">
              {this.state.users.map(user => {
                return <User user={user} key={user._id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("https://nc-news-timhamrouge.herokuapp.com/api/users")
      .then(res => {
        return res.json();
      })
      .then(usersObj => {
        this.setState({ users: usersObj.users });
      });
  }
}

export default UsersList;
