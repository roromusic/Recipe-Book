import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var recipes = [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];

function IngredientList(props) {
  const ingredients = props.ingredients.map(function(ingredient) {
    return (
      <li>{ingredient}</li>
    );
  })
  return (
    <div>
      {ingredients}
    </div>
  );
}

function Recipe(props) {
  return (
    <div>
      <header>{props.title}</header>
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul><IngredientList ingredients={props.ingredients}/></ul>
      </div>
      <div class="recipeButtons">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

class RecipeBook extends React.Component {
  render() {
    let recipeList = this.props.recipes.map(function(recipe){
      return (
        <Recipe title={recipe.title} ingredients={recipe.ingredients}/>
      );
    })
    return (
      <div>
        {recipeList}
      </div>
    );
  }
}

class AddRecipe extends React.Component {
  render() {
    return (
      <div>
      <button>Add Recipe</button>
      <div id="modal">
        <header>Add a Recipe</header>
        <div id="modalBody">
          <form>
            <div class="formGroup">
              <label>Recipe</label>
              <input type="text" label="Recipe" placeholder="Recipe Name" />
            </div>
            <div class="formGroup">
            <label>Ingredients</label>
            <input type="text" label="Ingredients" placeholder="Enter Ingredients,Separated,By Commas" />
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipes,
      modal: false
    }
  }
  render() {
    return (
      <div>
        <RecipeBook recipes={this.state.recipes}/>
        <AddRecipe modal={this.state.modal}/>
      </div>
    );
  }
}

export default App;
