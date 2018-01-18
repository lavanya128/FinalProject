const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	
});

const Recipes = mongoose.model("Recipes", recipeSchema);

module.exports = Recipes;
