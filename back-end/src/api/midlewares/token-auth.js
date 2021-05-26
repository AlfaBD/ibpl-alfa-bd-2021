const expressJwt = require('express-jwt');

module.exports = () => {
    const secret = process.env.SECRET;
    return expressJwt({ 
        secret: secret, 
        algorithms: ['HS256'],
        getToken: (req) => {
            return req.headers.token;
        } });
}