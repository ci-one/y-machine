/**
 * Created by user on 2014-08-05.
 */
var Costomer_File = [
    {
        id: '0',
        title: 'red',
        writer: '길동이',
        comp: '길동이회사',
        contact: '02-02-0222',
        email: 'apple@red.com',
        content: '안녕하세요',
        date:'2014-08-05'
    },
    {
        id: '1',
        title: 'blue',
        writer: '길동무',
        comp: '길동무회사',
        contact: '02-03-0333',
        email: 'apple@red.com',
        content: '그래안녕',
        date:"2014-08-05"
    },
    {
        id: '2',
        title: 'black',
        writer: '말동무',
        comp: '말동무회사',
        contact: '02-04-04444',
        email: 'hair@black.com',
        content: '왓와와왓',
        date: "2014-08-05"
    },
    {
        id: '3',
        title: 'black',
        writer: '말동무',
        comp: '말동무회사',
        contact: '02-04-04444',
        email: 'hair@black.com',
        content: '왓와와왓',
        date: "2014-08-05"
    },
    {
        id: '4',
        title: 'black',
        writer: '말동무',
        comp: '말동무회사',
        contact: '02-04-04444',
        email: 'hair@black.com',
        content: '왓와와왓',
        date: "2014-08-05"
    },
    {
        id: '3',
        title: 'black',
        writer: '말동무',
        comp: '말동무회사',
        contact: '02-04-04444',
        email: 'hair@black.com',
        content: '왓와와왓',
        date: "2014-08-05"
    }];


function Costomer_Controller($scope){
    $scope.items = Costomer_File;

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


function Costomer_Detail($scope, $routeParams){
    $scope.Costomer_File = Costomer_File[$routeParams.id];

}