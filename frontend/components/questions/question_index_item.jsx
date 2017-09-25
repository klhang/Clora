import React from "react";
import { Link, hashHistory } from "react-router";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: null };
  }

  render() {
    const question = this.props.question;

    return (
      <li className="QuestionItem">
        <Link to={`/questions/${question.id}`}>
          <h2 className="QuestionItemQuestion">{question.title}</h2>
        </Link>
      </li>
    );
  }
}

export default QuestionIndexItem;
