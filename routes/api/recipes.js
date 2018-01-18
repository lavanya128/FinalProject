const router = require('express').Router();
const recipesController = require('../../controllers/recipeController');

// Matches with "/api/saved"
router
  .route('/')
  .get(recipesController.findAll)
  .post(recipesController.create);

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .delete(recipesController.remove);

module.exports = router;
