const router = require('express').Router();
const controller = require('../controllers/recipe.controller');
const { requireAuth, requireRole } = require('../middleware/auth.middleware');
 
router.get('/', controller.getAll);
router.post('/', requireAuth, requireRole('admin'), controller.create);
router.delete('/:id', requireAuth, requireRole('admin'), controller.remove);
router.get('/favorites', requireAuth, controller.getFavorites);
router.post('/favorites', requireAuth, controller.addFavorite);
router.delete('/favorites/:recipeId', requireAuth, controller.removeFavorite);
router.get('/:id', controller.getById);
 
module.exports = router;