import React from "react";
import { Header, Loading, User } from "./index";

class UsersList extends React.Component {
  state = {
    users: [],
    loading: true
  };
  render() {
    let { users, loading } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <div className="users-list">
              <ul className="list-group">
                {users.map(user => {
                  return <User user={user} key={user._id} />;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    fetch("https://nc-news-timhamrouge.herokuapp.com/api/users")
      .then(res => {
        return res.json();
      })
      .then(usersObj => {
        this.setState({ users: usersObj.users, loading: !this.state.loading });
      });
  }
}

export default UsersList;
