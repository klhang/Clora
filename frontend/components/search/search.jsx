import React from "react";
import merge from "lodash/merge";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" };
  }

  componentDidMount() {
    if (!this.props.questions) {
      this.props.fetchQuestions();
    }
  }

  updateSearchField() {
    return e => {
      let newState = merge({}, this.state, { searchField: e.target.value });
      this.setState(newState);
    };
  }

  render() {}
}
export default Search;
