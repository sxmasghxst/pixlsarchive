const asyncHandler = require("express-async-handler");

exports.enter = asyncHandler(async(req, res, next) => {
    res.render('index');
})

exports.home = asyncHandler(async(req, res, next) => {
    res.render('enter', { title: 'pixlsarchive' });
})