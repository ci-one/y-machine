/**
 * Created by wealab04 on 2014-05-30.
 */
//쿼리를 나열하고 exports를 통해 배포하도록 한다.

exports.boardlist = 'SELECT * FROM board order by id desc';
exports.boardget = 'select * from board where id=?';

exports.boardinsert = 'insert into board values(null,?,?,?,?,now())';
exports.boardmodify = 'update board set title=?, content=?, file=?, date=now() where id=?';
exports.boardremove = 'delete from board where id=?';