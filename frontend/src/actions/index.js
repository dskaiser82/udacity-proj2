export const ADD_POST = 'ADD_POST'

export function addPost(Id, title, body, author) {
  return {
    type: 'ADD_POST',
    Id,
    title,
    body,
    author

  }
}
