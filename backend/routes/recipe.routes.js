const router = require('express').Router();
const controller = require('../controllers/recipe.controller');
const { requireAuth } = require('../middleware/auth.middleware');
 
router.get('/', controller.getAll);
router.get('/favorites', requireAuth, controller.getFavorites);
router.post('/favorites', requireAuth, controller.addFavorite);
router.delete('/favorites/:recipeId', requireAuth, controller.removeFavorite);
router.get('/:id', controller.getById);
 
module.exports = router;