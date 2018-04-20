import React from "react";
import Voter from "./Voter";

class Comment extends React.Component {
  render() {
    let comment = this.props.comment;
    return (
      <div className="comment">
        <li className="list-group-item border-0">
          <div className="card border-0">
            <div className="row">
              <div className="col-2">
                <Voter path={`comments/${comment._id}`} votes={comment.votes} />
              </div>
              <div className="col-10">
                <div className="card-body">
                  <h5>{comment.body}</h5>
                  <small>
                    Posted by: {comment.created_by} on {comment.created_at}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Comment;
