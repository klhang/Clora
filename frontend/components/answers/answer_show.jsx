import React from "react";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("answer show", this.props);
    const answer = this.props.answer;

    if (!answer) {
      return <div />;
    }

    return (
      <li className="Answer">
        <div>
          <div className="AnswerAuthorHeader">
            <a>{answer.author.username}</a>
          </div>

          <div className="AnswerText">{answer.text}</div>
        </div>
      </li>
    );
  }
}

export default AnswerIndexItem;
