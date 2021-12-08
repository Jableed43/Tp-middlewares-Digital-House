var express = require('express');
var router = express.Router();
const { admin } = require('../controllers/adminController')
const userRegistered = require('../middlewares/userRegistered')



router.get('/', userRegistered, admin);

module.exports = router;