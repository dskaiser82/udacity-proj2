import { ADD_POST,} from '../actions'
import { combineReducers } from 'redux'


//Our Food Reducer
function post(state = {}, action ){
  switch(action.type) {
    case ADD_POST :
      const { post } = action

      return {
        ...state,
        post: post
      }
      default :
        return state
  }
}

export default combineReducers({
  post
})
