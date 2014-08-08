'use strict';


var mcModule = angular.module('lsApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/awesomeThings').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            $scope.ymMenuList = [
                {url:'main', name:'홈으로'}
                , {url:'company/introduce', name:'리스금융'}
                , {url:'product/new/list', name:'할부금융렌탈'}
                , {url:'product/used/list', name:'담보및운전자금'}
                , {url:'request/new', name:'컨설팅'}
                , {url:'request/used', name:'고객문의'}
            ];

            $scope.ymTopMenuList = [
                {url:'sitemap', name:'사이트맵'}
                , {url:'login', name:'로그인'}
            ];

            $scope.ymAllMenuList = [
                {url:'main', name:'홈으로'}
                , {url:'company', name:'회사소개'}
                , {url:'company/introduce', name:'회사소개/인사말'}
                , {url:'company/direction', name:'회사소개/오시는길'}
                , {url:'product/new', name:'신제품소개'}
                , {url:'product/new/list', name:'신제품소개/목록'}
                , {url:'product/new/:id', name:'신제품소개/상세보기'}
                , {url:'product/new/write', name:'신제품소개/작성'}
                , {url:'product/new/category', name:'신제품소개/카테고리'}
                , {url:'product/used', name:'중고제품'}
                , {url:'product/used/list', name:'중고제품/목록'}
                , {url:'product/used/:id', name:'중고제품/상세보기'}
                , {url:'product/used/write', name:'중고제품/작성'}
                , {url:'product/used/category', name:'중고제품/카테고리'}
                , {url:'request/new', name:'고객문의'}
                , {url:'request/new/write', name:'고객문의/작성'}
                , {url:'request/new/list', name:'고객문의/목록'}
                , {url:'request/new/:id', name:'고객문의/상세보기'}
                , {url:'request/used', name:'중고장비문의'}
                , {url:'request/used/write', name:'중고장비문의/작성'}
                , {url:'request/used/list', name:'중고장비문의/목록'}
                , {url:'request/used/:id', name:'중고장비문의/상세보기'}
                , {url:'notice', name:'공지사항'}
                , {url:'notice/list', name:'공지사항/목록'}
                , {url:'notice/:id', name:'공지사항/상세보기'}
                , {url:'notice/write', name:'공지사항/작성'}
                , {url:'sitemap', name:'사이트맵'}
                , {url:'login', name:'로그인'}
                , {url:'main2', name:'금융리스메인'}
            ];
        });
    });


// 로그인 정보를 다루기 위한 서비스
// factory is made for manipulating and showing login statue

mcModule.factory('Accounts', function(){

    var is_login = null;
    var AccountName = "";

    return {
        setName: function(input) { AccountName = input;},
        getName: function() { return AccountName; },
        loginSuccess: function() { is_login = "Y"; },
        logout: function() { is_login = null; },
        is_login: function() { return is_login; }
    };

});

/**
 * Created by wealab04 on 2014-08-08.
 */
