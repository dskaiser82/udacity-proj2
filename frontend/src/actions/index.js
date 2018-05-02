let commentId = 1;

export const addComment = (text, author) => ({
  type: 'ADD_COMMENT',
  id: commentId++, //Notice the ++
  text: text,
  author: author
});

export const setComments = (commentList) => ({
  type: 'SET_COMMENTS',
  commentList: commentList
});
