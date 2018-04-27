const api = "http://localhost:3001"

let token = 600001
if (!token)
  token = localStorage.token = 60001

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
