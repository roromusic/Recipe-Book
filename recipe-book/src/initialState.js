const recipes = [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];

const initialState = {
  recipes: recipes,
  modal: { buttonText: "", display: false, recipeText: "", ingredientsText: "" },
  currentRecipe: ""
};

export default initialState