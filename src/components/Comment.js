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
              <div className="col-9">
                <div className="card-body">
                  <h5>{comment.body}</h5>
                  <small>
                    Posted by: {comment.created_by} on {comment.created_at}
                  </small>
                </div>
              </div>
              <div className="col-1">
                <button
                  className="btn bg-white"
                  onClick={() => this.handleDeleteButton(comment._id)}
                >
                  <div className="delete-cross">
                    <i className="fas fa-times" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
  handleDeleteButton = commentid => {
    this.props.deleteComment(commentid);
  };
}

export default Comment;
