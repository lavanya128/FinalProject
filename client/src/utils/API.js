import axios from "axios";

// const APIKEY = 'n6d1r8VL9Fmsh0XKb7z8UTTG4r39p1ITDMPjsnaHuSAcMTeLej';

// const queryUrlBase = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete';
// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    console.log("hitting recipes")
    return axios.post("/api/recipes", { params: { q: query}});
  },

   saveRecipe: function(recipeData) {
    return axios.post('/api/saved', recipeData);
  },

  getRecipeInfo: function(id){
    console.log("Recipe ID", id)
  	return axios.get("api/recipes/" + id)
  },

  getSavedRecipes: function() {
    return axios.get('/api/saved/');
  }

  // getRecipeInfo: function(query){
  // 	return axios.post("/api/recipes/id", { params: {q: query}})

  // }

};
