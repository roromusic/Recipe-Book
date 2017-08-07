import C from './constants'

export const addRecipe = (title, ingredients) => {
  return {
    type: C.ADD_RECIPE,
    recipes: {title, ingredients}
  }
}

export const removeRecipe = (title) => {
  return {
    type: C.DELETE_RECIPE,
    title
  }
}

//pass state.currentEdit to currentEdit
export const editRecipe = (title, ingredients, currentEdit) => {
  return {
    type: C.EDIT_RECIPE,
    recipe: {title, ingredients},
    currentEdit
  }
}

export const changeEditRecipe = (title) => {
  return {
    type: C.CHANGE_EDIT,
    title
  }
}

export const changeModalButton = (buttonText) => {
  return {
    type: C.CHANGE_BUTTON,
    buttonText
  }
}

export const showModal = () => {
  return {
    type: C.SHOW_MODAL
  }
}

export const hideModal = () => {
  return {
    type: C.HIDE_MODAL
  }
}

export const updateRecipe = (text) => {
  return {
    type: C.UPDATE_RECIPE_TEXT,
    text
  }
}

export const updateIngredients = (text) => {
  return {
    type: C.UPDATE_INGREDIENTS_TEXT,
    text
  }
}