const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactrecipelist",
  {
    useMongoClient: true
  }
);

const recipeSeed = [
  { recipeId: "560483",
    title: "Baked Tandoori Chicken",
    sSUrl: "https://spoonacular.com/baked-tandoori-chicken-560483",
    readyInMins: "80",
    ingredients: "5 large chicken breasts cut in large pieces,2 tbsp butter melted-for brushing,3 1/4 tsp chili powder,1 tsp paprika powder,4 tsp lemon juice,1 1/4 tsp salt,1/2 cup yogurt,1 tbsp ginger and garlic paste,1/2 tsp ground pepper freshly ground,1 tsp garam masala powder,1 tsp coriander powder,1/2 tsp cumin powder,4 tbsp olive oil,liquid red food coloring optional",
    instructions: "Wash and pat dry the chicken breasts. Cut them in half or thirds, depending on the size of the breasts. Cut deep slits into the chicken breasts. In a small bowl mix together all the ingredients for the wet rub. Smear the rub in between the slits and if there is any left over, rub it over the entire chicken breasts. In a medium size bowl, whisk together all the marinade ingredients. Place the chicken in the bowl with marinade and mix well, making sure each chicken breasts is fully coated. Cover the bowl with plastic wrap and refrigerate for a couple hours. Preheat oven to 400 F degrees. Line a baking sheet with aluminum foil and over it, place a grill rack. Place the chicken breasts over the grill rack leaving a bit of space in between each piece. Bake the chicken for 30 minutes, and after 15 minutes brush some butter over each piece. After the first 30 minutes, turn the chicken pieces over and bake for another 30 minutes, again brushing the meat with butter after 15 minutes. Garnish with lemon slices and chopped green onions.",
    pairedWines: "Chardonnay, Pinot Noir, Sauvignon Blanc",
    cuisineType: "Indian",
    pricePerServing: "$1.63"
  },
  {
    recipeId: "262682",
    title: "Thai Sweet Potato Veggie Burgers with Spicy Peanut Sauce",
    sSUrl: "https://spoonacular.com/thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682",
    readyInMins: "75",
    ingredients: "For the burgers: 1 large sweet potato, 1/2 cup cilantro, finely chopped, 1/4 cup fresh basil leaves-finely chopped 3 large garlic cloves-minced, 2 teaspoons finely grated ginger, 1/2 cup roasted and salted peanuts, finely chopped, 3/4 cup gluten-free rolled oats, processed into a coarse flour, 1 (15-ounce) can chickpeas, drained and rinsed, 2 tablespoons ground flax + 3 tbsp water, mixed in bowl, 1/2 tablespoon sesame seed oil, 1 tablespoon low-sodium tamari (or coconut aminos for soy-free option), 1 teaspoon fresh lime juice, 1 teaspoon ground coriander, 1 teaspoon fine grain sea salt, or to taste, Freshly ground black pepper, to taste, For the peanut sauce: 1 garlic clove, 6 tablespoons smooth peanut butter (or almond or sunflower seed butter), 2.5 tablespoons fresh lime juice, 2 tablespoons low-sodium tamari (or coconut aminos), 1-2 tablespoons water, as needed, 1/2 tablespoon pure maple syrup (or other sweetener), 1 teaspoon freshly grated ginger, 1/8 teaspoon cayenne pepper",
    instructions: "Preheat the oven to 350F and line a large baking sheet with parchment paper. Peel the sweet potato. Using a box grater with the regular-sized grate holes, grate 1.5 cups of sweet potato. Place in large bowl. I had about 1/2 of the sweet potato leftover, so I sliced it into 1-cm rounds and placed it on the baking sheet. Drizzle with oil and toss to coat. In a large bowl, stir together the grated sweet potato, cilantro, basil, garlic, ginger, and chopped peanuts. In a food processor, add the oats and process until finely chopped. You want the texture to be like a coarse flour. Stir the oat flour into the bowl with the vegetables. Now add the drained chickpeas into the processor and process until finely chopped. You want the mixture to be a cross between a coarse paste and finely chopped chickpeas, but don't completely puree the chickpeas. Stir the processed chickpeas into the bowl with the vegetables and oat flour. In a mug, whisk together the ground flax and water. Let it sit for only 20 seconds or so, any longer and it will get too thick. Stir this flax egg into the vegetable chickpea mixture until fully combined. Stir in the sesame oil, tamari, lime juice, coriander, salt, and pepper all to taste. Shape the mixture into 6-8 patties, packing each patty tightly between your hands so it holds together well. Place each patty onto the prepared baking sheet along with the sweet potato rounds. Bake for 20 minutes, then gently flip the patties and potato rounds and bake for another 15-17 minutes until golden on both sides. You might have to remove the sweet potato a bit early - just keep an eye on them so they don't burn. While the burgers are baking, prepare the peanut sauce. Add all sauce ingredients into a food processor and process until smooth. Adjust ingredients to taste if desired. The sauce will thicken up as it sits. After baking, place patties on a cooling rack for 10 minutes to cool slightly. Serve with toasted buns (or lettuce or whole grain wraps), tomato slices, roasted sweet potato, lettuce, and the peanut sauce. The peanut sauce will store in the fridge for at least a week. The burgers can be frozen (after baking and cooling) for a couple weeks.",
    pairedWines: "Malbec, Merlot, Zinfandel",
    cuisineType: "American",
    pricePerServing: "$0.79"
  },
  {
    recipeId: "247478",
    title: "Chicken Enchilada Stuffed Spaghetti Squash",
    sSUrl: "https://spoonacular.com/chicken-enchilada-stuffed-spaghetti-squash-247478",
    readyInMins: "45",
    ingredients: "FOR THE ROASTED SPAGHETTI SQUASH: 2 small spaghetti squash, cut in half and seeded, 1 tablespoon oil, salt and pepper to taste. FOR THE CHICKEN ENCHILADA STUFFED SPAGHETTI SQUASH: 1/2 pound chicken, cooked and shredded, 2 cups enchilada sauce (see below), 1/2 cup black beans (optional), 1/2 cup corn (optional), 1/4 cup cilantro, torn, 1/2 cup cheddar cheese, shredded, 1/2 cup monterey jack cheese, shredded",
    instructions: "FOR THE ROASTED SPAGHETTI SQUASH: Brush the inner flesh of the spaghetti squash with oil, season with salt and pepper and roast, skin side up, in a preheated 400F/200C oven until tender, about 30 minutes. FOR THE CHICKEN ENCHILADA STUFFED SPAGHETTI SQUASH: Mix the chicken, enchilada sauce, beans, corn and cilantro, divide the mixture between the spaghetti squash and top with the cheese. Broil in the oven until the cheese has melted and turned a light golden brown, about 2-3 minutes.",
    pairedWines: "Chardonnay, Pinot Noir, Sauvignon Blanc",
    cuisineType: "mexican",
    pricePerServing: "$3.56"
  }
];

db.Recipes
  .remove({})
  .then(() => db.Recipes.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
