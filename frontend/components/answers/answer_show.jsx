import React from "react";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import CommentIndexContainer from "../comments/comment_index_container";
import { ConditionalComponent } from "../../util/route_util";

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commentsClicked: false };
  }

  updateCommentsClicked() {
    return e => {
      let boolean;
      if (this.state.commentsClicked === false) {
        boolean = true;
      } else {
        boolean = false;
      }
      let newState = merge({}, this.state, { commentsClicked: boolean });
      this.setState(newState);
    };
  }

  comments() {
    if (this.state.commentsClicked === false) {
      return <div />;
    } else {
      return <CommentIndexContainer answerId={this.props.answer.id} />;
    }
  }

  render() {
    // console.log("answer show", this.props);
    const answer = this.props.answer;

    if (!answer) {
      return <div />;
    }

    return (
      <div className="container top-boader top-margin-30">

        <div className="row all-margin-10">
          <div className="left-margin-10 right-margin-10">
              <span>
                <span>{answer.author.username} Answer:</span>
              </span>
          </div>
        </div>

        <span>{answer.text}</span>
        <br></br>

          <ConditionalComponent
            trueComponent={() => (
              <button
                className="add-comment-form-item PerfectColdButton all-margin-10"
                onClick={this.updateCommentsClicked()}
              >
                Create Comments
              </button>
            )}
            falseComponent={() => <div />}
          />
          <div>{this.comments()}</div>
      </div>

    );
  }
}
// <div>{this.comments()}</div>
export default AnswerIndexItem;
