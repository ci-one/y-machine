'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */

var connect = require('../controllers/dbconnect_v1.01.js');
var query = require('../controllers/query.js');
var fs = require('fs');

var c = connect.connection();


//연결로그 출력
c.on('connect', function () {
    console.log('DataBase Connected');
}).on('error', function (err) {
    console.log('DataBase called error : ' + err);
}).on('close', function (hadError) {
    console.log('DataBase Closed');
});


/////////////////////////////////////////////공지사항게시판
exports.noticeList = function (req, res) {
    var sending = [];
    c.query(query.noticeList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.noticeOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    // title, content, file, writer, href
    c.query(query.noticeOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.noticeInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\notice\\';//'\public/images/notice'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.noticeInsert = function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var images = req.body.images;
    c.query(query.noticeInsert, [ title, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};

exports.noticeDeleteF = function (req, res) {
    var file = req.body.file;
    var dir = '.\\app\\images\\notice\\';//'\public/images/notice'
    fs.unlink(dir + file, function (err) {
        if (err) throw err;
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.noticeDelete = function (req, res) {
    var id = req.body.id;
    c.query(query.noticeDelete, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.noticeUpdate = function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    c.query(query.noticeUpdate, [title, content, id].on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '변경되었습니다.';
        res.send(200, obj);
    }));
};
/////////////////////////////////////////공지사항 end


/////////////////////////////////////////////새제품게시판
exports.nitemList = function (req, res) {
    var sending = [];
    c.query(query.nitemList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.nitemOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.nitemOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.nmodelList = function (req, res) {
    var sending = [];
    c.query(query.nmodelList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.nitemInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\newPro\\';//'\public/images/newPro'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.nitemInsert = function (req, res) {
    var name = req.body.name;
    var comp = req.body.comp;
    var content = req.body.content;
    var images = req.body.images;

    c.query(query.nitemInsert, [ name, comp, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};

exports.nmodelInsert = function(req,res){
    var proId = req.body.proId;
    var name = req.body.name;
    var option = req.body.option;

    c.query(query.nmodelInsert,[name,proId,option]).on('result',function(res){
        res.on('row',function(row){
        });
    }).on('end',function(){
        var obj = '추가하였습니다.';
        res.send(200,obj);
    })
};

exports.nitemDeleteF = function (req, res) {
    var file = req.body.file;
    var dir = '.\\app\\images\\newPro\\';//'\public/images/newPro'
    fs.unlink(dir + file, function (err) {
        if (err) throw err;
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.nitemDelete = function (req, res) {
    var id = req.body.id;
    c.query(query.nitemDelete, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.nmodelDelete = function(req,res){
    var id = req.body.id;
    c.query(query.nmodelDelete,[id]).on('result',function(res){
        res.on('row',function(row){
        })
    }).on('end',function(){
        var obj = '삭제하였습니다.';
        res.send(200,obj);
    });
};
/////////////////////////////////////////////새제품end



/////////////////////////////////////////////중고기계게시판
exports.oitemList = function (req, res) {
    var sending = [];
    c.query(query.oitemList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.oitemOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.oitemOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.omodelList = function (req, res) {
    var sending = [];
    c.query(query.omodelList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.oitemInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\oldPro\\';//'\public/images/oldPro'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.oitemInsert = function (req, res) {
    var name = req.body.name;
    var comp = req.body.comp;
    var content = req.body.content;
    var images = req.body.images;

    c.query(query.oitemInsert, [ name, comp, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};

exports.omodelInsert = function(req,res){
    var proId = req.body.proId;
    var name = req.body.name;
    var option = req.body.option;

    c.query(query.omodelInsert,[name,proId,option]).on('result',function(res){
        res.on('row',function(row){
        });
    }).on('end',function(){
        var obj = '추가하였습니다.';
        res.send(200,obj);
    })
};

exports.oitemDeleteF = function (req, res) {
    var file = req.body.file;
    var dir = '.\\app\\images\\oldPro\\';//'\public/images/oldPro'
    fs.unlink(dir + file, function (err) {
        if (err) throw err;
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.oitemDelete = function (req, res) {
    var id = req.body.id;
    c.query(query.oitemDelete, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.send(200, obj);
    });
};

exports.omodelDelete = function(req,res){
    var id = req.body.id;
    c.query(query.omodelDelete,[id]).on('result',function(res){
        res.on('row',function(row){
        })
    }).on('end',function(){
        var obj = '삭제하였습니다.';
        res.send(200,obj);
    });
};
/////////////////////////////////////////////중고 end


/////////////////////////////////////////////공작기계 문의 게시판
exports.mcqList = function (req, res) {
    var sending = [];
    c.query(query.mcqList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.mcqOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.mcqOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.mcqInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\mcQ\\';//'\public/images/mcQ'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.mcqInsert = function (req, res) {
    var title = req.body.title;
    var writer = req.body.writer;
    var comp = req.body.comp;
    var contact = req.body.contact;
    var email = req.body.email;
    var content = req.body.content;
    var images = req.body.images;

    c.query(query.nitemInsert, [ title,writer, comp,contact,email, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};
////////////////////////////////////////////공작기계 문의 end


/////////////////////////////////////////////금융리스 문의 게시판
exports.lsqList = function (req, res) {
    var sending = [];
    c.query(query.lsqList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.lsqOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.lsqOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.lsqInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\lsQ\\';//'\public/images/lsQ'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.lsqInsert = function (req, res) {
    var title = req.body.title;
    var writer = req.body.writer;
    var comp = req.body.comp;
    var contact = req.body.contact;
    var email = req.body.email;
    var content = req.body.content;
    var images = req.body.images;

    c.query(query.lsqInsert, [ title,writer, comp,contact,email, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};
/////////////////////////////////////////////금융리스 문의 end


////////////////////////////////////////////고객문의 게시판
exports.customerList = function (req, res) {
    var sending = [];
    c.query(query.customerList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.customerOne = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.customerOne, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.customerInsertF = function (req, res) {
    var file = req.files.images;
    var dir = '.\\app\\images\\customerQ\\';//'\public/images/customerQ'
    var name = new Date().getTime() + file.name;
    if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });
    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.customerInsert = function (req, res) {
    var title = req.body.title;
    var writer = req.body.writer;
    var comp = req.body.comp;
    var contact = req.body.contact;
    var email = req.body.email;
    var content = req.body.content;
    var images = req.body.images;

    c.query(query.customerInsert, [ title,writer, comp,contact,email, content, images ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '추가하였습니다.';
        res.send(200, obj);
    });
};
////////////////////////////////////////////////고객문의 end


////////////////////////////////////////////////로그인
exports.idChk = function(req,res){
    var sending = [];
    var id = req.body.id;
    var pswd = req.body.pswd;
    c.query(query.idChk,[id,pswd]).on('result',function(res){
        res.on('row',function(row){
            sending.push(row);
        })
    }).on('end',function(){
        var obj = 'fail';
        if (sending[0] != null) {
            obj = 'success';
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    })
}
///////////////////////////////////////////////로그인 end



/////////////////////////////////////////////중고추천리스트
exports.oldRecList = function (req, res) {
    var sending = [];
    c.query(query.oldRecList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.oldRecUpdate = function (req, res) {
    var id = req.body.id;
    var itemId = req.body.itemId;
    c.query(query.oldRecUpdate, [itemId,id].on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '변경되었습니다.';
        res.send(200, obj);
    }));
};

exports.oldRecDelete = function (req, res) {
    var id = req.body.id;
    c.query(query.oldRecDelete, [id].on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제되었습니다.';
        res.send(200, obj);
    }));
};
/////////////////////////////////////////중고추천 end

/////////////////////////////////////////////새제품추천리스트
exports.newRecList = function (req, res) {
    var sending = [];
    c.query(query.newRecList, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.newRecUpdate = function (req, res) {
    var id = req.body.id;
    var itemId = req.body.itemId;
    c.query(query.newRecUpdate, [itemId,id].on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '변경되었습니다.';
        res.send(200, obj);
    }));
};

exports.newRecDelete = function (req, res) {
    var id = req.body.id;
    c.query(query.newRecDelete, [id].on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제되었습니다.';
        res.send(200, obj);
    }));
};
/////////////////////////////////////////새제품추천리스트 end