'use strict';

angular.module('mcApp', [
    'ngRoute'
    , 'ui.bootstrap'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/ym'
            })
            .when('/ym', {
                templateUrl: '/views/1100_main/050-1100-M_main.html'
            })
            .when('/ym/main2', {
                templateUrl: '/views/2100_main/050-2100-M_main.html'
            })
            .when('/ym/main', {
                redirectTo: '/ym'
            })
            .when('/ym/company', {
                templateUrl: '/views/1200_company/050-1200-S_company.html'
            })
            .when('/ym/company/introduce', {
                templateUrl: '/views/1200_company/050-1210-S_company_introduce.html'
            })
            .when('/ym/company/direction', {
                templateUrl: '/views/1200_company/050-1220-S_company_directions.html'
            })
            .when('/ym/product/new', {
                templateUrl: '/views/1300_newProduct/050-1300-S_new.html'
            })
            .when('/ym/product/new/list', {
                templateUrl: '/views/1300_newProduct/050-1310-S_new_list.html'
            })
            .when('/ym/product/new/write', {
                templateUrl: '/views/1300_newProduct/050-1330-S_new_write.html'
            })
            .when('/ym/product/new/category', {
                templateUrl: '/views/1300_newProduct/050-1340-S_new_category.html'
            })
            .when('/ym/product/new/:id', {
                templateUrl: '/views/1300_newProduct/050-1320-S_new_detail.html'
            })
            .when('/ym/product/used', {
                templateUrl: '/views/1400_usedProduct/050-1400-S_used.html'
            })
            .when('/ym/product/used/list', {
                templateUrl: '/views/1400_usedProduct/050-1410-S_used_list.html'
            })
            .when('/ym/product/used/write', {
                templateUrl: '/views/1400_usedProduct/050-1430-S_used_write.html'
            })
            .when('/ym/product/used/category', {
                templateUrl: '/views/1400_usedProduct/050-1440-S_used_category.html'
            })
            .when('/ym/product/used/:id', {
                templateUrl: '/views/1400_usedProduct/050-1420-S_used_detail.html'
            })
            .when('/ym/request/new', {
                templateUrl: '/views/1500_request/050-1500-S_request.html'
            })
            .when('/ym/request/new/write', {
                templateUrl: '/views/1500_request/050-1510-S_request_write.html'
            })
            .when('/ym/request/new/list', {
                templateUrl: '/views/1500_request/050-1520-S_request_list.html'
            })
            .when('/ym/request/new/:id', {
                templateUrl: '/views/1500_request/050-1530-S_request_detail.html'
            })
            .when('/ym/request/used', {
                templateUrl: '/views/1600_requestUsed/050-1600-S_request_used.html'
            })
            .when('/ym/request/used/write', {
                templateUrl: '/views/1600_requestUsed/050-1610-S_request_used_write.html'
            })
            .when('/ym/request/used/list', {
                templateUrl: '/views/1600_requestUsed/050-1620-S_request_used_list.html',
                controller: 'ctrlRead'
            })
            .when('/ym/request/used/:id', {
                templateUrl: '/views/1600_requestUsed/050-1630-S_request_used_detail.html',
                controller: 'ctrlDetail'
            })
            .when('/ym/notice', {
                templateUrl: '/views/1700_notice/050-1700-S_notice.html'
            })
            .when('/ym/notice/list', {
                templateUrl: '/views/1700_notice/050-1710-S_notice_list.html',
                controller: 'ctrlListNotice'
            })
            .when('/ym/notice/write', {
                templateUrl: '/views/1700_notice/050-1730-S_notice_write1.html'
            })
            .when('/ym/notice/:id', {
                templateUrl: '/views/1700_notice/050-1720-S_notice_detail.html'
            })
            .when('/ym/sitemap', {
                templateUrl: '/views/3100_sitemap/050-3100-S_sitemap.html'
            })
            .when('/ym/login', {
                templateUrl: '/views/4100_login/050-4100-S_login.html'
            })

    });

