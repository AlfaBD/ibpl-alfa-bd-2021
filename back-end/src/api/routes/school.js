const router = require('express');
const route = router();

module.exports = (app) => {

    //All routes under this file will be prefixed with /analysis
    app.use('/analysis', route);

    //Process predicition student speech
    route.post( '/predict/:studentId/:speech', (req, res, next) => {});

    // We will keep the token authentication disabled for now
    //app.use(tokenAuth());

    //All routes under this file will be prefixed with /school
    app.use('/school', route);

    //Get all school information
    route.get( '/', (req, res, next) => {});

    //Get a specific school information
    route.get( '/:schoolId', (req, res, next) => {});

    //Create a new school
    route.post( '/', (req, res, next) => {});

    //Update a school information
    route.put( '/:schoolId', (req, res, next) => {});

    //Delete a specific school
    route.delete( '/:schoolId', (req, res, next) => {});
};
