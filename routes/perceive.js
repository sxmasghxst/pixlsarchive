const express = require('express');
const router = express.Router();

const perceive_controller = require("../controllertons/perceiveController");

//get perceive page
router.get('/', perceive_controller.perceive);

module.exports = router;