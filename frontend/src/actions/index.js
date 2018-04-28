export const ADD_POST = 'ADD_POST'

export function addPost(id, title, body, author) {
  return {
    type: 'ADD_POST',
    id,
    title,
    body,
    author

  }
}
