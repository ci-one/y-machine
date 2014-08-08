/**
 * Created by wealab04 on 2014-08-08.
 */
/**
 * Created by ci-one on 2014-08-04.
 */




function newListCtrl($scope, newProductService) {
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    var getlist = function () {
        newProductService.list().then(function (result) {
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
function nPro_Detail($scope, $routeParams, newProductService) {
    var ai = $routeParams.id;
    newProductService.one(ai).then(function(result){
        $scope.item = result[0];
        var images = $scope.item.images.split('/');
        var images2 = [];
        for(var i=0;i<images.length;i++){
            if(images[i]!=''){
                images2.push(images[i]);
            }
        }
        $scope.item_sorting=images2;
        newProductService.mlist(ai).then(function(result){
            $scope.model_item=result;
        })



    });

}

function Notice_Write($scope, noticeService){
    var $filess;
    $scope.onFileSelect = function($files) {
        $filess = $files;
    };
    $scope.insert = function(){
        if($filess==null || $filess==''){
            var title = $scope.item.title;
            var content = $scope.item.content;
            var images = 'no file';
            noticeService.insert(title, content, images).then(function(data){
                alert(data)
            });
            history.back();
        }else{
            noticeService.insertF($filess).then(function(result){
                var title = $scope.item.title;
                var content = $scope.item.content;
                var images = result;
                noticeService.insert(title, content, images).then(function(data){
                    alert(data)
                });
                history.back();
            },function(){
                alert('잘못된 등록이 발생하였습니다.')
            });
        }
    };
}
function Notice_Update($scope, $routeParams, noticeService){
    var i = $routeParams.id;
    noticeService.one(i).then(function(result){
        $scope.item = result[0];
    });
    $scope.insert = function(){
        var title = $scope.item.title;
        var content = $scope.item.content;
        noticeService.update(i, title, content).then(function(data){
            alert(data);
            history.back();
        })
    }
}