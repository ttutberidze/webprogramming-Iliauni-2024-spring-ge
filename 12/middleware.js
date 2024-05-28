const authMiddleware = (req, res, next) => {
    if(true) {
        next()
    } else {
        res.status(401).send({message: 'please provide acces token'})
    }
}

module.exports = {
    authMiddleware
}