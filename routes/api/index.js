const router = require('express').Router();
const recipeRoutes = require('./recipes');

// Article routes
router.use('/saved', recipeRoutes);

module.exports = router;
