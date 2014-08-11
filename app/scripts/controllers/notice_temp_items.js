/**
 * Created by ci-one on 2014-08-04.
 */



function Notice_Controller($scope, noticeService) {
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    var getlist = function () {
        noticeService.list().then(function (result) {
            $scope.items = result;
        }).then(function () {
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
        });
    }
    getlist();
}
function Notice_Detail($scope, $routeParams, noticeService) {
    var i = $routeParams.id;
    noticeService.one(i).then(function (result) {
        $scope.notice_items = result[0];
        var images = $scope.notice_items.images.split('/');
        var images2 = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i] != '') {
                images2.push(images[i]);
            }
        }
        $scope.notice_items_sorting = images2;
    });
    $scope.delete = function () {
        var input = confirm("삭제 하시겠습니까?");
        if (input) {
            noticeService.delete(i);
            alert("삭제되었습니다")
            history.back();
        } else {

        }
    }
}

function Notice_Write($scope, noticeService) {
    var $filess;
    $scope.onFileSelect = function ($files) {
        $filess = $files;
    };
    $scope.insert = function () {

        var input = confirm("등록 하시겠습니까?");
        if (input) {
            if ($filess == null || $filess == '') {
                var title = $scope.item.title;
                var content = $scope.item.content;
                var images = 'no file';
                noticeService.insert(title, content, images).then(function (data) {
                    alert(data)
                });
                history.back();
            } else {
                noticeService.insertF($filess).then(function (result) {
                    var title = $scope.item.title;
                    var content = $scope.item.content;
                    var images = result;
                    noticeService.insert(title, content, images).then(function (data) {
                        alert(data)
                    });
                    history.back();
                }, function () {
                    alert('잘못된 등록이 발생하였습니다.')
                });
            }
        } else {

        }

    };
}
function Notice_Update($scope, $routeParams, noticeService) {
    var i = $routeParams.id;
    noticeService.one(i).then(function (result) {
        $scope.item = result[0];
    });
    $scope.insert = function () {
        var input = confirm("수정 하시겠습니까?");
        if (input) {
            var title = $scope.item.title;
            var content = $scope.item.content;
            noticeService.update(i, title, content).then(function (data) {
                alert(data);
                history.back();
            })
        } else {

        }
    }
}

