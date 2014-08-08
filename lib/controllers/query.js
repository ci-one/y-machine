/**
 * Created by wealab04 on 2014-05-30.
 */

//공지사항게시판
exports.noticeList = 'select * from notice';
exports.noticeOne = 'select * from notice where id=?';
exports.noticeInsert = 'insert into notice values(null,?,?,now(),?)';
exports.noticeDelete = 'delete from notice where id=?';
exports.noticeUpdate = 'update notice set title=?, content=? where id=?';
//컬럼 : id, title, content, date, images
//done

//새제품게시판
exports.nitemList = 'select * from nProduct';
exports.nitemOne = 'select * from nProduct where id=?';
exports.nmodelList = 'select * from newModel where proId=?';
exports.nitemInsert = 'insert into nProduct values(null,?,?,?,?)';
exports.nmodelInsert = 'insert into newModel values(null,?,?,?)';
exports.nitemDelete = 'delete from nProduct where id=?';
exports.nmodelDelete = 'delete from newModel where proId=?';
//컬럼 : id, name, comp, content, images
//컬럼 : id, proId, name, option
//done


//중고기계게시판
exports.oitemList = 'select * from oProduct';
exports.oitemOne = 'select * from oProduct where id=?';
exports.omodelList = 'select * from oldModel where proId=?';
exports.oitemInsert = 'insert into oProduct values(null,?,?,?,?)';
exports.omodelInsert = 'insert into oldModel values(null,?,?,?)';
exports.oitemDelete = 'delete from oProduct where id=?';
exports.omodelDelete = 'delete from `oldModel where proId=?';
//컬럼 : id, name, comp, content, images
//컬럼 : id, proId, name, option
//done


//공작기계 문의
exports.mcqList = 'select * from mcQue';
exports.mcqOne = 'select * from mcQue where id=?';
exports.mcqInsert = 'insert into mcQue values(null,?,?,?,?,?,?,?)';
//컬럼 : id, title, writer, comp, contact, email, content, images


//금융리스 문의
exports.lsqList = 'select * from lsQue';
exports.lsqOne = 'select * from lsQue where id=?';
exports.lsqInsert = 'insert into lsQue values(null,?,?,?,?,?,?,?)';
//컬럼 : id, title, writer, comp, contact, email, content, images
//done


//고객문의
exports.customerList = 'select * from customerQ';
exports.customerOne = 'select * from customerQ where id=?';
exports.customerInsert = 'insert into customerQ values(null,?,?,?,?,?,?,?)';
//컬럼 : id, title, writer, comp, contact, email, content, images


//로그인
exports.idChk = 'select * from account where id=?, pswd=?';
//컬럼 : id, name, pswd


//중고장비 추천 리스트
exports.oldRecList = 'select o.* from oldRecomm r, oProduct o where r.itemId=o.id';
exports.oldRecUpdate = 'update oldRecomm set itemId=? where id=?';
exports.oldRecDelete = 'update oldRecomm set itemId=null where id=?';
//컬럼 : id, itemId

//새제품 추천 리스트
exports.newRecList = 'select n.* from newRecomm r, nProduct n where r.itemId=n.id';
exports.newRecUpdate = 'update newRecomm set itemId=? where id=?';
exports.newRecDelete = 'update newRecomm set itemId=null where id=?';
//컬럼 : id, itemId
