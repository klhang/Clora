import React from "react";

import QuestionIndexItem from "../questions/question_index_item";

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Search Results: Found {this.props.questions.length} Question(s).
        </h1>

        <ul>
          this.props.questions.map(question =>
          {
            <QuestionIndexItem
              questionId={question.id}
              currentUser={this.props.currentUser}
              createAnswer={this.props.createAnswer}
            />
          });
        </ul>
      </div>
    );
  }
}

export default SearchList;
