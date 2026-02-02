const router = require('express').Router();
const controller = require('../controllers/ingredientType.controller');
 
router.get('/', controller.getAll);
 
module.exports = router;