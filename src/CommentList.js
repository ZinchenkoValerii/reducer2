import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div key={Date.now()}>
          <h4>{comment.author}</h4>
          <div>{comment.content}</div>
          <time>{comment.createdAt.getTime()}</time>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ comments }) => {
  return {
    comments
  };
};

export default connect(mapStateToProps)(CommentList);
