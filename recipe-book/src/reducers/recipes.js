const recipesReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_RECIPE :
      let list = state.slice();
      let newList = [];
      let isDuplicate = false;
    
      list.forEach((item) => {
        if(item.title === action.recipes.title) {
          item.title = action.recipes.title;
          item.ingredients = action.recipes.ingredients;
          isDuplicate = true
        }
        newList.push(item);
      });
    
      if(!isDuplicate) {
        newList.push(action.recipes);
      }
      return newList
      
    case DELETE_RECIPE :
      return state.slice().filter((item) => item.title !== action.title)
      
    case EDIT_RECIPE:
      list = [...state];
      newList = [];
    
      list.forEach((item) => {
        if(item.title === action.currentEdit) {
          item.title = action.recipe.title;
          item.ingredients = action.recipe.ingredients;
          isDuplicate = true
        }
        newList.push(item);
      });
    
      return newList
      
    default:
      return state
                    }
}

export default recipesReducer