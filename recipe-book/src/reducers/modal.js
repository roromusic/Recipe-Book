import { combineReducers } from 'redux'

const buttonText = (state="", action) => {
  switch(action.type) {
    case CHANGE_BUTTON :
      return action.buttonText
      
    default:
      return state
  }
}

const display = (state=false, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return true
      
    case HIDE_MODAL:
      return false
      
    default:
      return state
  }
}

const recipeText = (state="", action) => 
  (action.type === UPDATE_RECIPE_TEXT) ?
    action.text :
    state

const ingredientsText = (state="", action) => 
  (action.type === UPDATE_INGREDIENTS_TEXT) ?
    action.text :
    state

const modalReducer = combineReducers({
    buttonText,
    display,
    recipeText,
    ingredientsText
})

export default modalReducer