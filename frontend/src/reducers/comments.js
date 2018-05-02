const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [ //notice array of objects
        ...state,
        {id: action.id, author: action.author, text: action.text}
      ];
    case 'SET_COMMENTS':
      return action.commentList;
    default:
      return state
  }
};

export default comments
