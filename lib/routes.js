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
module.exports = function (app) {
    app.use(bodyParser());
    app.use(multipart());
    app.use(methodOverride());

    // Server API Routes
    app.route('/api/awesomeThings')
        .get(api.awesomeThings);


    // All undefined api routes should return a 404
    app.post('/noticeList', board.noticeList);
    app.post('/noticeDelete', board.noticeDelete);
    app.post('/noticeDeleteF', board.noticeDeleteF);
    app.post('/noticeInsert', board.noticeInsert);
    app.post('/noticeInsertF', board.noticeInsertF);
    app.post('/noticeOne', board.noticeOne);
    app.post('/noticeUpdate', board.noticeUpdate);


    app.post('/nitemList', board.nitemList);
    app.post('/nitemOne', board.nitemOne);
    app.post('/nmodelList', board.nmodelList);
    app.post('/nitemInsert', board.nitemInsert);
    app.post('/nitemInsertF', board.nitemInsertF);
    app.post('/nmodelInsert', board.nmodelInsert);
    app.post('/nitemDeleteF', board.nitemDeleteF);
    app.post('/nitemDelete', board.nitemDelete);
    app.post('/nmodelDelete', board.nmodelDelete);


    app.post('/oitemList', board.oitemList);
    app.post('/oitemOne', board.oitemOne);
    app.post('/omodelList', board.omodelList);
    app.post('/oitemInsert', board.oitemInsert);
    app.post('/oitemInsertF', board.oitemInsertF);
    app.post('/omodelInsert', board.omodelInsert);
    app.post('/oitemDeleteF', board.oitemDeleteF);
    app.post('/oitemDelete', board.oitemDelete);
    app.post('/omodelDelete', board.omodelDelete);


    app.post('/mcqList', board.mcqList);
    app.post('/mcqOne', board.mcqOne);
    app.post('/mcqInsertF', board.mcqInsertF);
    app.post('/mcqInsert', board.mcqInsert);


    app.post('/lsqList', board.lsqList);
    app.post('/lsqOne', board.lsqOne);
    app.post('/lsqInsert', board.lsqInsert);
    app.post('/lsqInsertF', board.lsqInsertF);


    app.post('/customerList', board.customerList);
    app.post('/customerOne', board.customerOne);
    app.post('/customerInsert', board.customerInsert);
    app.post('/customerInsertF', board.customerInsertF);

    app.post('/idChk', board.idChk);

    app.post('/oldRecList', board.oldRecList);
    app.post('/oldRecUpdate', board.oldRecUpdate);
    app.post('/oldRecDelete', board.oldRecDelete);


    app.post('/newRecList', board.newRecList);
    app.post('/newRecUpdate', board.newRecUpdate);
    app.post('/newRecDelete', board.newRecDelete);

    app.route('/lease')
        .get( index.lease);
    app.route('/*')
        .get(index.index);
};