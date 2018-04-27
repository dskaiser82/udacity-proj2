import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions'
import { combineReducers } from 'redux'


//Our Food Reducer
function food(state = {}, action ){
  switch(action.type) {
    case ADD_RECIPE :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe
      }
      default :
        return state
  }
}

export default combineReducers({
  food
})
