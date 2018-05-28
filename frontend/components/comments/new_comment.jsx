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


      <div className='container well'>
      <div className="row add-comment-form">
        <div className="left-padding-30">
          <input type="text" className="form-control" id="comment_field" onChange={this.updateCommentField()} value={this.state.comment.text} id="question_field" className="left-margin-10 add-comment-form-item add-comment-input line-height-15" placeholder="Add a comment..."/>
          <button type="submit" onClick={this.submitNewComment} className="add-comment-form-item PerfectColdButton all-margin-10" >
            <span>Submit</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default NewComment;
