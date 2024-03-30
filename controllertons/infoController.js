const asyncHandler = require("express-async-handler");

exports.info = asyncHandler(async(req, res, next) => {
    res.render("info");
});