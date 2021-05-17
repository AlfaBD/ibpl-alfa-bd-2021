const router = require('express');
const route = router();

module.exports = (app) => {

    //All routes under this file will be prefixed with /teacher
    app.use('/teacher', route);

    //Get all teacher information
    route.get( '/', (req, res, next) => {});

    //Get a specific teacher information
    route.get( '/:teacherId', (req, res, next) => {});

    //Create a new teacher
    route.post( '/', (req, res, next) => {});

    //Update a teacher information
    route.put( '/:teacherId', (req, res, next) => {});

    //Delete a specific teacher
    route.delete( '/:teacherId', (req, res, next) => {});
};