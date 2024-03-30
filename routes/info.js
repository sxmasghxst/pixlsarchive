const express = require('express');
const router = express.Router();

const info_controller = require("../controllertons/infoController");

//get info page
router.get('/', info_controller.info);

module.exports = router;