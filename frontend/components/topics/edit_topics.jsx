import React from "react";
import merge from "lodash/merge";

class EditTopics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const topics = this.props.topics.map(topic => {
      return (
        <button onClick={this.props.fetchTopicQuestions.bind(this, topic.id)}>
          {topic.name}
        </button>
      );
    });

    return (
      <div className="Topics">
        <h1>Feeds</h1>

        <ul>
          <button onClick={this.props.fetchQuestions.bind(this)}>
            All Topics
          </button>
          {topics}
        </ul>
      </div>
    );
  }
}

export default EditTopics;
