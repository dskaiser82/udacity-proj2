let commentId = 1;

export const addComment = (author, text) => ({
  type: 'ADD_COMMENT',
  id: commentId++, //Notice the ++
  author: author,
  text: text
});

export const setComments = (commentList) => ({
  type: 'SET_COMMENTS',
  commentList: commentList
});
