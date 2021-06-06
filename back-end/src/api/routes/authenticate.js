const jwt = require('jsonwebtoken');
const router = require('express');
const route = router();

module.exports = (app) => {

    app.use('/authenticate', route);

    // Authenticate route
    route.post( '/', (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;

        // We still need to place the required logic here to pull data from the database

        // Successful validation
        if (username === 'test-user' && password === 'test-password') {
            const token = jwt.sign({ sub: username }, process.env.SECRET, { expiresIn: '7d', algorithm: 'HS256' });
            res.json({message: 'Success', role: role, token}).status(200);
        } else {
            res.json({message: 'Error'}).status(403);
        }
    
    });

};
