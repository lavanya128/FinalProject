const axios = require("axios");
const router = require("express").Router();
var unirest = require('unirest');

var recipeID;
var imageUrl;
var query;

router.post("/recipes", (req, res) => {
  console.log("Posting to API")
	console.log(req.body)
	unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=${req.body.params.q}&excludeIngredients=coconut&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&type=main+course/`)
  .header("X-Mashape-Key", "Cm5bzQL9c2msh3qysJYyy7cUPOCRp1uu9zLjsnervyB7szinMN")
  .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
  .end(function (result){


  // console.log(result.body.results[0].title);
  // console.log(result.body.results[0].image);
  // console.log(result.body.results[0].imageUrls[0]);

  //recipeID = result.body.results[0].id;

  // for(var i=0; i<=result.body.number; i++)
  // {
  // 	recipeID = result.body.results[i].id;
  // 	console.log(recipeID);
  // 	imageUrl = "https://spoonacular.com/recipeImages/" + (result.body.results[i].image);
  // 	console.log(imageUrl);

  // }

  res.json(result.body.results);
  
  
});
});

//var qurl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/query=${req.body.params.id}/information?includeNutrition=false";
//console.log(qurl);
// console.log(req.body.params.id);
router.get("/recipes/:id", (req, res, id) => {
  console.log("retreiving recipe data")
unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information?includeNutrition=false`)
.header("X-Mashape-Key", "Cm5bzQL9c2msh3qysJYyy7cUPOCRp1uu9zLjsnervyB7szinMN")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  
  console.log(result.status, result.headers, result.body);
  //console.log(result.body.spoonacularSourceUrl);
  console.log("recipe data", result.body);
  res.json(result.body);
});

});


// router.get("/recipes", (req, res) => {
// 	console.log(req.body)
//   axios
//     .get("https://api.edamam.com/search?app_id=${f0d548fd}&app_key=${b02ef9a61789674617136a444f0a1389}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free/api/", { params: req.query })
//     .then(({ data: { results } }) => {
//     	console.log(results)
//     	res.json(results)
//     })
//     .catch(err => {console.log('something') 
//     	res.status(422).json(err)});
// });

module.exports = router;


