const router = require('express');
const route = router();

module.exports = (app) => {

    //All routes under this file will be prefixed with /student
    app.use('/school', route);

    //Get all student information
    route.get( '/', (req, res, next) => {});

    //Get a specific student information
    route.get( '/:schoolId', (req, res, next) => {});

    //Create a new student
    route.post( '/', (req, res, next) => {});

    //Update a student information
    route.put( '/:schoolId', (req, res, next) => {});

    //Delete a specific student
    route.delete( '/:schoolId', (req, res, next) => {});
};