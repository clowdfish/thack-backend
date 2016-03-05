// routes/app.js

module.exports = function (app) {

    // ==========================================================================
    // CONTROLLER SETUP =========================================================
    // ==========================================================================
    var AppController = require('../controller/userController');


    app.get('/profile', function (req, res) {

        var userID = '356a192b7913b04c54574d18c28d46e6395428ab';
        var user = AppController.getUser(userID);
        res.status(200).json(user);

    });
    app.get('/friends', function (req, res) {

        var userID = '356a192b7913b04c54574d18c28d46e6395428ab';
        var result = AppController.getFriendsList(userID);
        res.status(200).json(result);


    });

    app.get('/friends/:id', function (req, res) {

        var userID = req.params.id;
        var result = AppController.getFriend(userID);
        res.status(200).json(result);

    });


};