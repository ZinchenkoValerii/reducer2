import React, { useState } from "react";
import { connect } from "react-redux";

const CommentForm = ({ dispatch }) => {
  const [content, setContent] = useState("");
  const addComment = e => {
    const comment = {
      author: "Me",
      content,
      createdAt: new Date()
    };
    dispatch({ type: "add", comment });
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={e => {
          e.persist();
          setContent(e.target.value);
        }}
      />
      <button onClick={addComment}>Add</button>
    </div>
  );
};

export default connect(() => ({}))(CommentForm);
