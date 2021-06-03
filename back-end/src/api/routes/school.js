const router = require('express');
const route = router();

module.exports = (app) => {

    //All routes under this file will be prefixed with /analysis
    app.use('/analysis', route);

    //Process predicition student speech
    route.post( '/predict/:studentId/:speech', (req, res, next) => {});
};

