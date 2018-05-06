const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [ //notice array of objects
        ...state,
        {id: action.id, author: action.author, text: action.text}
      ];
    case 'SET_POSTS':
      return action.postList;
    default:
      return state
  }
};

export default posts
