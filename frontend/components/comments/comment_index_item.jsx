import React from "react";
import { Link } from "react-router-dom";
import merge from "lodash/merge";
class CommentIndexItem extends React.Component {
  render() {
    const comment = this.props.comment;
    return (
      <li>
        <div className="CommentAuthorHeader">
          <a className="CommentUserName">{comment.author.username}</a>
        </div>
        <div className="CommentText">{comment.text} </div>
      </li>
    );
  }
}

export default CommentIndexItem;
