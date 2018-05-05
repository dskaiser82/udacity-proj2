let postId = 1;

export const addPost = (text, author) => ({
  type: 'ADD_POST',
  id: postId++, //Notice the ++
  text: text,
  author: author
});

export const setPosts = (postList) => ({
  type: 'SET_POSTS',
  postList: postList
});
