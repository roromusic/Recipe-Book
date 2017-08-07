import { combineReducers } from 'redux'
import recipes from './recipes'
import modal from './modal'
import currentRecipe from './currentRecipe'

const recipeApp = combineReducers({
    recipes,
    modal,
    currentRecipe
})

export default recipeApp