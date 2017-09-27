import React from "react";

import merge from "lodash/merge";

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.submitNewComment = this.submitNewComment.bind(this);
    this.state = {
      comment: {
        text: "",
        answer_id: this.props.answerId,
        author_id: this.props.currentUser.id
      }
    };
  }

  submitNewComment(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment).then(() => {
      let newState = merge({}, this.state, { comment: { text: "" } });
      this.setState(newState);
    });
  }

  updateCommentField() {
    return e => {
      let newState = merge({}, this.state, {
        comment: { text: e.target.value }
      });
      this.setState(newState);
    };
  }

  render() {
    return (
      <div>
        <form className="NewCommentForm" onSubmit={this.submitNewComment}>
          <input
            className="CommentInput"
            type="text"
            placeholder="Add a comment here..."
            onChange={this.updateCommentField()}
            value={this.state.comment.text}
          />
          <input className="NewCommentButton" type="submit" value="Comment" />
        </form>
      </div>
    );
  }
}

export default NewComment;
