export default (req, res, next) => {
    res.locals.currentPage = req.originalUrl.slice(1);
    res.locals.colorMode = req.cookies.color_mode;
    // TODO: Add user login middleware here
    next();
};