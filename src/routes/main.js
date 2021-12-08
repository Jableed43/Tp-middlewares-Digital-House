var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexControllers')



router.get('/', indexController.index);

router.get('/error', indexController.error);



module.exports = router;