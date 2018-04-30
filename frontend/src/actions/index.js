export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({ typed, meal }) {
  return {
    type: ADD_RECIPE,
    typed,
    meal,
  }
}

export function removeFromCalendar ({ meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    meal,
  }
}
