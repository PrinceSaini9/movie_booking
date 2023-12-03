
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) {
        //401 Unauthorized
        return res.status(401).send('Please Login first to access this endpoint!');
    }

    try {
        const decodedToken = jwt.verify(token, '1@3456Qw-');
        req.user = decodedToken;
        console.log(decodedToken);
        next();
    } catch(ex) {
        res.status(401).send('Unauthorized User');
    }
}

module.exports = auth;