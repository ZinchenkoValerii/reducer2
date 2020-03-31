const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.comment];
    default:
      return state;
  }
};

export default commentsReducer;
