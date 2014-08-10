'use strict';
var app = angular.module('lsApp', [
    'ngRoute'
    , 'ui.bootstrap'
    , 'angularFileUpload'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/lease'
        }).when('/lease', {
            templateUrl: '/views/2100_main/050-2100-M_main.html'
        }).when('/lease/main', {
            redirectTo: '/lease'
        }).when('/lease/fir', {
            templateUrl: '/views/5000_lease/050-5000-businessField1.html'
        }) .when('/lease/thi', {
            templateUrl: '/views/1200_company/050-1200-S_company.html'
        }) .when('/lease/fou', {
            templateUrl: '/views/1200_company/050-1200-S_company.html'
        }) .when('/lease/introduce', {
            templateUrl: '/views/5000_lease/050-5000-introduce.html'
        }).when('/lease/direction', {
            templateUrl: '/views/5000_lease/050-5100-directions.html'
        }).when('/lease/business1', {
            templateUrl: '/views/5000_lease/050-5200-businessfield1.html'
        }).when('/lease/business2', {
            templateUrl: '/views/5000_lease/050-5300-businessfield2.html'
        }).when('/lease/business3', {
            templateUrl: '/views/5000_lease/050-5400-businessfield3.html'
        }).when('/lease/business4', {
            templateUrl: '/views/5000_lease/050-5500-businessfield4.html'
        }).when('/lease/ask',{
            templateUrl:'/views/5000_lease/050-5600-leasequestion.html',
            controller: 'leaseAskWriteCtrl'
        }).when('/lease/ask/write',{
            templateUrl:'/views/5000_lease/050-5610-leasequestion_write.html',
            controller: 'leaseAskWriteCtrl'
        }).when('/lease/ask/list',{
            templateUrl:'/views/5000_lease/050-5620-leasequestion_list.html',
            controller: 'leaseAskListCtrl'
        }).when('/lease/ask/:id',{
            templateUrl:'/views/5000_lease/050-5630-leasequestion_detail.html',
            controller: 'leaseAskViewCtrl'
        })

});

app.factory('leaseQuestionService', function ($http, $q, $upload) {
    var leaseQuestionService = {};
    leaseQuestionService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/lsqList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    leaseQuestionService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/lsqOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    leaseQuestionService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';
        var $file = $filess[0];
        $upload.upload({
            url: '/lsqInsertF',
            file: $file,
            progress: function (e) {
            }
        }).then(function (data) {
            fname += data.data + '/';
            deferred.resolve(fname);
        }, function (data) {
            alert(data.data);
        });

        return deferred.promise;
    };


    leaseQuestionService.insert = function (item, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/lsqInsert',
            data: {title: item.title, writer: item.writer, comp: item.comp, contact: item.contact, email: item.email, content: item.content, images: images}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    return leaseQuestionService;
});

