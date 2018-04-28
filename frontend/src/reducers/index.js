import { ADD_POST,} from '../actions'
import { combineReducers } from 'redux'


const initialPost = {
  id: null,
  title: null,
  body: null,
  author: null
}

function post (state = initialPost, action) {
  const { post } = action

  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
      }

    default :
      return state
  }
}

export default post
