/**
 * Created by wealab04 on 2014-08-08.
 */
/**
 * Created by ci-one on 2014-08-04.
 */




function oldListCtrl($scope, oldProductService, oldRecommService, $routeParams) {
    $scope.select = $routeParams.id;
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    oldRecommService.list().then(function (result) {
        $scope.recomm = result;
    });

    var getlist = function () {
        if ($scope.select != null) {
            oldProductService.list($scope.select).then(function (result) {
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
        } else {
            oldProductService.listall().then(function (result) {
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
    }
    getlist();
}
function oPro_Detail($scope, $routeParams, oldProductService, oldRecommService) {
    var ai = $routeParams.id;
    oldProductService.one(ai).then(function (result) {
        $scope.item = result[0];
        var images = $scope.item.images.split('/');
        var images2 = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i] != '') {
                images2.push(images[i]);
            }
        }
        $scope.item_sorting = images2;
        oldProductService.mlist(ai).then(function (result) {
            $scope.model_item = result;
        })


    });
    $scope.delete = function (id, images) {
        oldRecommService.chk(id).then(function (result){
            if (result=='true') {
                alert('추천상품으로 등록되어있어 삭제할 수 없습니다.');
            } else {
                 if (images == 'no file') {
                 oldProductService.mdelete(id).then(function () {
                 oldProductService.delete(id).then(function (result) {
                 alert(result);
                 history.back();
                 })
                 })
                 } else {
                 oldProductService.deleteF(images).then(function () {
                 oldProductService.mdelete(id).then(function () {
                 oldProductService.delete(id).then(function (result) {
                 alert(result);
                 history.back();
                 })
                 })
                 })

                 }
            }
        });
    }

    oldRecommService.list().then(function (result) {
        $scope.recomlist = result;
    });

    $scope.setting = function (id) {
        alert('id' + id + 'ai' + ai);
        oldRecommService.update(id, ai).then(function () {
            alert('추천상품으로 등록되었습니다.');
            history.back();
        });
    }

}

function oldWriteCtrl($scope, oldProductService, $routeParams) {
    if ($routeParams.id == null || $routeParams.id == '') {
        $scope.ai = 0;
    } else {
        $scope.ai = $routeParams.id;
    }
    var $filess;
    $scope.model = [];

    $scope.onFileSelect = function ($files) {
        $filess = $files;
    };

    $scope.modeladd = function () {
        var addmode = {name: $scope.modeint.name, option: $scope.modeint.option};
        $scope.model.push(addmode);
    }

    $scope.insert = function () {
        if ($filess == null || $filess == '') {
            var name = $scope.item.name;
            var company = $scope.item.company;
            var content = $scope.item.content;
            var images = 'no file';
            oldProductService.insert(name, company, content, images, $scope.ai).then(function () {
                oldProductService.onefor(name, company).then(function (result) {
                    var itemId = result[0].id;
                    for (i = 0; i < $scope.model.length; i++) {
                        oldProductService.minsert(itemId, $scope.model[i].name, $scope.model[i].option).then(function () {
                            console.log(i);
                        });
                    }
                    alert('등록하였습니다.');
                    history.back();
                })
            });
        } else {
            oldProductService.insertF($filess).then(function (result) {
                var name = $scope.item.name;
                var company = $scope.item.company;
                var content = $scope.item.content;
                var images = result;
                oldProductService.insert(name, company, content, images, $scope.ai).then(function () {
                    oldProductService.onefor(name, company).then(function (result) {
                        var itemId = result[0].id;
                        for (i = 0; i < $scope.model.length; i++) {
                            oldProductService.minsert(itemId, $scope.model[i].name, $scope.model[i].option).then(function () {
                                console.log(i);
                            });
                        }
                        alert('등록하였습니다.');
                        history.back();
                    })
                });
            }, function () {
                alert('잘못된 등록이 발생하였습니다.')
            });
        }
    };
}