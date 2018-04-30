export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({ recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    meal,
  }
}

export function removeFromCalendar ({ meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    meal,
  }
}
