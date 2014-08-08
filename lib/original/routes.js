'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    board = require('./controllers/boardDAO');
var methodOverride = require('method-override');
var multipart = require('connect-multiparty');
var bodyParser = require('body-parser');


/**
 * Application routes
 */
module.exports = function(app) {
    app.use(bodyParser());
    app.use(multipart());
    app.use(methodOverride());

    // Server API Routes
    app.route('/api/awesomeThings')
        .get(api.awesomeThings);


    // All undefined api routes should return a 404
    app.route('/api/*')
        .get(function (req, res) {
            res.send(404);
        });

    app.route('/getlist')
        .post(board.list);

    app.route('/getboard')
        .post(board.get);

    app.route('/insertboard')
        .post(board.insert);

    app.route('/updateboard')
        .post(board.update);

    app.route('/deleteboard')
        .post(board.delete);

    app.post('/server/uploadFile', board.insertF);

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
    app.route('/')
        .get( index.index);
    app.route('/laese')
        .get( index.laese);
};