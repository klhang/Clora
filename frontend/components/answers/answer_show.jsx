import React from "react";
import merge from "lodash/merge";
import { Link, hashHistory } from "react-router";

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
