/**
 * Created by wealab04 on 2014-08-08.
 */
/**
 * Created by ci-one on 2014-08-04.
 */




function newListCtrl($scope, newProductService, $routeParams) {
    $scope.select = $routeParams.id;
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    var getlist = function () {
        if ($scope.select != null) {
            newProductService.list($scope.select).then(function (result) {
                $scope.items = result;
                for(i=0;i<result.length;i++){
                    $scope.items[i].images = result[i].images.split('/')[0];
                }
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
        }else{
            newProductService.listall().then(function (result) {
                $scope.items = result;
                for(i=0;i<result.length;i++){
                    $scope.items[i].images = result[i].images.split('/')[0];
                }
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
function nPro_Detail($scope, $routeParams, newProductService) {
    var ai = $routeParams.id;
    newProductService.one(ai).then(function (result) {
        $scope.item = result[0];
        var images = $scope.item.images.split('/');
        var images2 = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i] != '') {
                images2.push(images[i]);
            }
        }
        $scope.item_sorting = images2;
        newProductService.mlist(ai).then(function (result) {
            $scope.model_item = result;
        })


    });
    $scope.delete = function(id,images){
        if(images=='no file'){
            newProductService.mdelete(id).then(function(){
                newProductService.delete(id).then(function(result){
                    alert(result);
                    history.back();
                })
            })
        }else{
                newProductService.deleteF(images).then(function(){
                    newProductService.mdelete(id).then(function(){
                        newProductService.delete(id).then(function(result){
                            alert(result);
                            history.back();
                        })
                    })
                })

        }
    }

}

function newWriteCtrl($scope, newProductService, $routeParams) {
    $scope.ai = $routeParams.id;
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
            newProductService.insert(name, company, content, images, $scope.ai).then(function () {
                newProductService.onefor(name,company).then(function(result){
                    var itemId = result[0].id;
                    for(i=0;i<$scope.model.length;i++){
                        newProductService.minsert(itemId, $scope.model[i].name, $scope.model[i].option).then(function () {
                            console.log(i);
                        });
                    }
                    history.back();
                })
            });
        } else {
            newProductService.insertF($filess).then(function (result) {
                var name = $scope.item.name;
                var company = $scope.item.company;
                var content = $scope.item.content;
                var images = result;
                newProductService.insert(name, company, content, images, $scope.ai).then(function () {
                    newProductService.onefor(name,company).then(function(result){
                        var itemId = result[0].id;
                        for(i=0;i<$scope.model.length;i++){
                            newProductService.minsert(itemId, $scope.model[i].name, $scope.model[i].option).then(function () {
                                console.log(i);
                            });
                        }
                        history.back();
                    })
                });
            }, function () {
                alert('잘못된 등록이 발생하였습니다.')
            });
        }
    };
}
function Notice_Update($scope, $routeParams, noticeService) {
    var i = $routeParams.id;
    noticeService.one(i).then(function (result) {
        $scope.item = result[0];
    });
    $scope.insert = function () {
        var title = $scope.item.title;
        var content = $scope.item.content;
        noticeService.update(i, title, content).then(function (data) {
            alert(data);
            history.back();
        })
    }
}