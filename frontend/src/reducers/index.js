import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions'

const initialCalendarState = {
    breakfast: null,
    lunch: null,
    dinner: null,
}

function calendar (state = initialCalendarState, action) {
  const { recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
          [meal]: recipe,

      }
    case REMOVE_FROM_CALENDAR :
    return {
      ...state,
        [meal]: null,

    }
    default :
      return state
  }
}

export default calendar
