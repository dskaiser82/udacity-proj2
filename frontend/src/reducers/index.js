import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions'


function calendar (state = [], action) {
  const { typed, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
          meal: action.meal,
      }
    case REMOVE_FROM_CALENDAR :
    return {
      ...state,
        meal: null,

    }
    default :
      return state
  }
}

export default calendar
