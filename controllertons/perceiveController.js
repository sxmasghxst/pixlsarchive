const asyncHandler = require("express-async-handler");

exports.perceive = asyncHandler(async(req, res, next) => {
    res.render("perceive");
});