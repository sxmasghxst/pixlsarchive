const asyncHandler = require("express-async-handler");

exports.enter = asyncHandler(async(req, res, next) => {
    res.render('enter');
})

exports.home = asyncHandler(async(req, res, next) => {
    res.render('index', { title: 'pixlsarchive' });
})