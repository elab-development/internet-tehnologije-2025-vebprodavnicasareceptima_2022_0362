const router = require('express').Router();
const controller = require('../controllers/product.controller');
const { requireAuth, requireRole } = require('../middleware/auth.middleware');
 
router.get('/', controller.getAll);
router.post('/', requireAuth, requireRole('admin'), controller.create);
router.delete('/:id', requireAuth, requireRole('admin'), controller.remove);
 
module.exports = router;