const authorize = (req, res, next) => {
    // console.log("authorize");
    const { user } = req.query;
    if (user === "jhon") {
        req.user = {name: "jhon", id: 3 };
        next()
    } else {
        res.status(404).send("Unauthorized");
    }
    next();

}

module.exports = authorize;