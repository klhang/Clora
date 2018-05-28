import React from "react";
import CommentIndexItem from "./comment_index_item";
import NewComment from "./new_comment.jsx";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const answerId = this.props.answerId;
    const comments = this.props.comments.map(comment => {
      if (comment.answer_id === answerId) {
        return <CommentIndexItem key={comment.id} comment={comment} />;
      }
    });

    return (
      <div className="row add-comment-form">
        <NewComment
          currentUser={this.props.currentUser}
          answerId={this.props.answerId}
          createComment={this.props.createComment}
        />

        <div className="left-padding-30">

          <ul className="comment-list list-unstyled">
            <br/>
            <div className='indexcomments'>
              {comments}
            </div>
            <br/>
          </ul>


        </div>
      </div>






    );
  }
}

export default CommentIndex;
