const router = require('express').Router();

const userController = require('./controllers/userController');
const furnitureController = require('./controllers/furnitureControler');

router.use('/users', userController);
router.use('/data/catalog', furnitureController);

module.exports = router;