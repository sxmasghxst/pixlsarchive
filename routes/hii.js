const express = require('express');
const router = express.Router();

const hii_controller = require("../controllertons/hiiController");

/* GET hii listing. */
router.get('/', hii_controller.hi);

module.exports = router;
