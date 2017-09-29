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
      <li className="Answer">
        <div>
          <div className="AnswerAuthorHeader">
            <h3>{answer.author.username}:</h3>
          </div>
          <div className="AnswerText">{answer.text}</div>

          <ConditionalComponent
            trueComponent={() => (
              <button
                className="CommentsButton"
                onClick={this.updateCommentsClicked()}
              >
                Create Comments
              </button>
            )}
            falseComponent={() => <div />}
          />
          <div>{this.comments()}</div>
        </div>
      </li>
    );
  }
}
// <div>{this.comments()}</div>
export default AnswerIndexItem;
