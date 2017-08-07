const currentRecipe = (state="", action) => 
  (action.type === CHANGE_EDIT) ?
    action.title:
    state

export default currentRecipe