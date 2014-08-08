/**
 * Created by ci-one on 2014-08-04.
 */

    /*
var notice_items = [{
    id : 0,
    title : '공지사항 입니다',
    author : 'CI-one',
    content : '본 페이지는 Angular.js 기반의 반응형 웹 시스템으로 만들어졌습니다.',
    date : '2014-07-29',
    images : 'notice.jpg'
}, {
    id : 1,
    title : '필독해주세요',
    author : '관리자',
    content : '중요한 공지사항입니다. 감사합니다.',
    date : '2014-08-01',
    images : ''
}, {
    id : 2,
    title : '공작기계',
    author : '김아무개',
    content : '공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-02',
    images : 'gong1.jpg/gong2.jpg/img_src_cap0241.jpg/'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}, {
    id : 3,
    title : 'CI-one에서 알려드립니다',
    author : 'CI-one',
    content : '앞으로는 공작기계 페이지 공지사항이 여기 올라오게 됩니다.',
    date : '2014-08-04',
    images : 'basic.jpg'
}];




function Notice_Controller($scope) {
    $scope.items = notice_items;



    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    var getlist = function () {
        var searchMatch = function (haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };
        // init the filtered items
        $scope.search = function () {
            $scope.currentPage = 0;
            // now group by pages
            $scope.groupToPages();
        };
        // calculate page in place
        $scope.groupToPages = function () {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.items.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                }
            }
        };
        $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };
        $scope.setPage = function () {
            $scope.currentPage = this.n;
        };
        // functions have been describe process the data for display
        $scope.search();
    };
    getlist();
}
function Notice_Detail($scope, $routeParams) {
    $scope.notice_items = notice_items[$routeParams.id];
    $scope.notice_items_sorting = $scope.notice_items.images.split('/');
}

*/
'use strict';
function listview($scope, $filter, items){
    $scope.noticetitle="제목테스트";
    $scope.pageClass = 'ctrlAni';
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.isAdmin = function () {
        return SessionInfo.getCurrentUser().isAdmin;
    };

     $scope.process = function (mole) {
        $scope.firstitem = mole;
        console.log(mole);
    };

    var getlist = function () {
        items.query().then(function (result) {
            $scope.firstitem = result[0];
            $scope.items = result;
        }).then(function () {

            // init the filtered items
            $scope.search = function () {
                $scope.currentPage = 0;
                // now group by pages
                $scope.groupToPages();
            };
            // calculate page in place
            $scope.groupToPages = function () {
                $scope.pagedItems = [];

                for (var i = 0; i < $scope.items.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                    }
                }
            };
            $scope.range = function (start, end) {
                var ret = [];
                if (!end) {
                    end = start;
                    start = 0;
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                return ret;
            };
            $scope.prevPage = function () {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };
            $scope.nextPage = function () {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };
            $scope.setPage = function () {
                $scope.currentPage = this.n;
            };
            // functions have been describe process the data for display
            $scope.search();
        })
    };
    getlist();

    $scope.update = function (item) {

        var i = item.id;
        items.getone(i).then(function (result) {
            $scope.item = result[0];
        });

        $scope.insert = function () {
            var title = $scope.item.title;
            var content = $scope.item.content;

            items.update(i, title, content).then(function (data) {
                alert(data);
                history.back();
            })
        }
    };

    $scope.delete = function (id, fileN) {
        items.delete(id, fileN).then(function (data) {
            alert(data);
            getlist();
        })
    }

}

