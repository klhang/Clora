import React from "react";
import { Link } from "react-router-dom";
import merge from "lodash/merge";
class CommentIndexItem extends React.Component {
  render() {
    const comment = this.props.comment;
    return (
    <li className="top-boader all-margin-10 top-padding-10 ">
        <div className='container '>

          <div className="row">
            <div className="left-margin-30">
              <div className="">
                <span>
                  <a className="user black" href="#">{comment.author.username}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="all-margin-10">
              <span className="rendered_qtext">
                <p>{comment.text}</p>
              </span>
            </div>
          </div>

        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
