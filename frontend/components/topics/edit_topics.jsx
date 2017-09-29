import React from "react";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";

class EditTopics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  handleClick(topicId) {
    return () => {
      this.props
        .fetchTopicQuestions(topicId)
        .then(() => this.props.history.push("/questions"));
    };
  }

  handleClickAllTopics() {
    return () => {
      this.props
        .fetchQuestions()
        .then(() => this.props.history.push("/questions"));
    };
  }
  render() {
    const topics = this.props.topics.map(topic => {
      return <button onClick={this.handleClick(topic.id)}>{topic.name}</button>;
    });

    return (
      <div className="Topics">
        <h1>Feeds</h1>

        <ul>
          <button onClick={this.handleClickAllTopics()}>All Topics</button>
          {topics}
        </ul>
      </div>
    );
  }
}

export default withRouter(EditTopics);
