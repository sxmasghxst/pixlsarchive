const express = require('express');
const router = express.Router();
const index_controller = require("../controllertons/indexController");

/* GET home page. */
router.get('/', index_controller.enter);
router.get('/homerton', index_controller.home);

module.exports = router;
