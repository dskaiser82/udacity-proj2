let commentId = 1;

export const addComment = (text) => ({
  type: 'ADD_COMMENT',
  id: commentId++, //Notice the ++
  text: text
});

export const setComments = (commentList) => ({
  type: 'SET_COMMENTS',
  commentList: commentList
});
