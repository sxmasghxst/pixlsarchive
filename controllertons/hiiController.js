const asyncHandler = require("express-async-handler");

exports.hi = asyncHandler(async(req, res, next) => {
    res.render("sayingHi");
});




