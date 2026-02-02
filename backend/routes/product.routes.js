const router = require('express').Router();
const controller = require('../controllers/product.controller');
 
router.get('/', controller.getAll);
 
module.exports = router;