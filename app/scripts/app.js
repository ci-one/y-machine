'use strict';
var app = angular.module('mcApp', [
    'ngRoute'
    , 'ui.bootstrap'
    , 'angularFileUpload'
]);

app.config(function ($routeProvider, $locationProvider) {
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
            templateUrl: '/views/1300_newProduct/050-1300-S_new.html',
            controller: 'ctrlRead'
        })
        .when('/ym/product/new/list', {
            templateUrl: '/views/1300_newProduct/050-1310-S_new_list.html',
            controller: 'newListCtrl'
        })
        .when('/ym/product/new/write', {
            templateUrl: '/views/1300_newProduct/050-1330-S_new_write.html',
            controller: 'ctrlRead'
        })
        .when('/ym/product/new/category', {
            templateUrl: '/views/1300_newProduct/050-1340-S_new_category.html'
        })
        .when('/ym/product/new/:id', {
            templateUrl: '/views/1300_newProduct/050-1320-S_new_detail.html',
            controller: 'nPro_Detail'
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
            templateUrl: '/views/1700_notice/050-1710-S_notice_list.html'
        })
        .when('/ym/notice/write', {
            templateUrl: '/views/1700_notice/050-1730-S_notice_write.html',
            controller:'Notice_Write'
        })
        .when('/ym/notice/:id', {
            templateUrl: '/views/1700_notice/050-1720-S_notice_detail.html'
        })
        .when('/ym/notice/write/:id',{
            templateUrl: '/views/1700_notice/050-1730-S_notice_write.html',
            controller:'Notice_Update'
        })
        .when('/ym/sitemap', {
            templateUrl: '/views/3100_sitemap/050-3100-S_sitemap.html'
        })
        .when('/ym/login', {
            templateUrl: '/views/4100_login/050-4100-S_login.html'
        }).when('/lease', {
            templateUrl: '/views/2100_main/050-2100-M_main.html'
        })

});


app.factory('noticeService', function ($http, $q, $upload) {
    var noticeService = {};
    noticeService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/noticeList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    noticeService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/noticeOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    noticeService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';
        var $file = $filess[0];
            $upload.upload({
                url: '/noticeInsertF',
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


    noticeService.insert = function (title, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/noticeInsert',
            data: {title: title, content: content, images: images}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    noticeService.update = function (id, title, content) {
        var deferred = $q.defer();

        $http({
            method: 'post',
            url: '/noticeUpdate',
            data: {id: id, title: title, content: content}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    noticeService.deleteF = function (images) {
        var image = images.split('/');
        var deferred = $q.defer();

        for (file = 0; file < image.length; file++) {
            $http({
                method: 'post',
                url: '/noticeDeleteF',
                data: {file: file}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
        }

        return deferred.promise;
    };

    noticeService.delete = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/deleteboard',
            data: {id: id}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    return noticeService;
});

app.factory('newProductService', function ($http, $q, $upload) {
    var newProductService = {};
    newProductService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/nitemList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    newProductService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/nitemOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };
    newProductService.mlist = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/nmodelList',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    newProductService.minsert = function (proId, name, option) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/nmodelInsert',
            data: { proId: proId, name: name, option: option
            }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    newProductService.insert = function (name, comp, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/nitemInsert',
            data: { name: name, comp: comp, content: content, images: images }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };


    newProductService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';

        for ($file = 0; $file < $filess.length; $file++) {
            $upload.upload({
                url: '/nitemInsertF',
                file: $file,
                progress: function (e) {
                }
            }).then(function (data) {
                fname += data.data + '/';
                deferred.resolve(fname);
            }, function (data) {
                alert(data.data);
            });
        }

        return deferred.promise;
    };


    newProductService.deleteF = function (images) {
        var image = images.split('/');
        var deferred = $q.defer();

        for (file = 0; file < image.length; file++) {
            $http({
                method: 'post',
                url: '/nitemDeleteF',
                data: {file: file}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
        }

        return deferred.promise;
    };

    newProductService.delete = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/nitemDelete',
            data: {id: id}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    newProductService.mdelete = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/nmodelDelete',
            data: {id: id}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    return newProductService;
});

app.factory('oldProductService', function ($http, $q, $upload) {
    var oldProductService = {};
    oldProductService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/oitemList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    oldProductService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/oitemOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };
    oldProductService.mlist = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/omodelList',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    oldProductService.minsert = function (proId, name, option) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/omodelInsert',
            data: { proId: proId, name: name, option: option
            }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    oldProductService.insert = function (name, comp, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/oitemInsert',
            data: { name: name, comp: comp, content: content, images: images }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };


    oldProductService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';

        for ($file = 0; $file < $filess.length; $file++) {
            $upload.upload({
                url: '/oitemInsertF',
                file: $file,
                progress: function (e) {
                }
            }).then(function (data) {
                fname += data.data + '/';
                deferred.resolve(fname);
            }, function (data) {
                alert(data.data);
            });
        }

        return deferred.promise;
    };


    oldProductService.deleteF = function (images) {
        var image = images.split('/');
        var deferred = $q.defer();

        for (file = 0; file < image.length; file++) {
            $http({
                method: 'post',
                url: '/oitemDeleteF',
                data: {file: file}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
        }

        return deferred.promise;
    };

    oldProductService.delete = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/oitemDelete',
            data: {id: id}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    oldProductService.mdelete = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/omodelDelete',
            data: {id: id}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    return oldProductService;
});
app.factory('machineQuestionService', function ($http, $q, $upload) {
    var machineQuestionService = {};
    machineQuestionService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/mcqList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    machineQuestionService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/mcqOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    machineQuestionService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';

        for ($file = 0; $file < $filess.length; $file++) {
            $upload.upload({
                url: '/mcqInsertF',
                file: $file,
                progress: function (e) {
                }
            }).then(function (data) {
                fname += data.data + '/';
                deferred.resolve(fname);
            }, function (data) {
                alert(data.data);
            });
        }

        return deferred.promise;
    };


    machineQuestionService.insert = function (title, writer, comp, contact, email, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/mcqInsert',
            data: {title: title, writer: writer, comp: comp, contact: contact, email: email, content: content, images: images}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    return machineQuestionService;
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

        for ($file = 0; $file < $filess.length; $file++) {
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
        }

        return deferred.promise;
    };


    leaseQuestionService.insert = function (title, writer, comp, contact, email, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/lsqInsert',
            data: {title: title, writer: writer, comp: comp, contact: contact, email: email, content: content, images: images}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    return leaseQuestionService;
});

app.factory('customerService', function ($http, $q, $upload) {
    var customerService = {};
    customerService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/customerList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    customerService.one = function (id) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/customerOne',
                data: {id: id}
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    customerService.insertF = function ($filess) {
        var deferred = $q.defer();
        var fname = '';

        for ($file = 0; $file < $filess.length; $file++) {
            $upload.upload({
                url: '/customerInsertF',
                file: $file,
                progress: function (e) {
                }
            }).then(function (data) {
                fname += data.data + '/';
                deferred.resolve(fname);
            }, function (data) {
                alert(data.data);
            });
        }

        return deferred.promise;
    };


    customerService.insert = function (title, writer, comp, contact, email, content, images) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/customerInsert',
            data: {title: title, writer: writer, comp: comp, contact: contact, email: email, content: content, images: images}
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };
    return customerService;
});

app.factory('loginService', function ($http, $q) {
    this.idChk = function (id, pswd) {
        var deferred = $q.defer();

        $http({
            url: '/idChk',
            method: 'post',
            data: {id: id, pswd: pswd}
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (status) {
            deferred.reject(status);
        });

        return deferred.promise;
    }
});

app.factory('oldRecommService', function ($http, $q, $upload) {
    var oldRecommService = {};
    oldRecommService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/oldRecList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    oldRecommService.one = function (itemId) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/oitemOne',
                data: {id: itemId }
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    oldRecommService.update = function (id, itemId) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/oldRecUpdate',
            data: { id: id, itemId: itemId }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    oldRecommService.delete = function (id) {
        var deferred = $q.defer();

        $http({
            method: 'post',
            url: '/oldRecDelete',
            data: {id: id }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    return oldRecommService;
});

app.factory('newRecommService', function ($http, $q, $upload) {
    var newRecommService = {};
    newRecommService.list = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/newRecList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };

    newRecommService.one = function (itemId) {
        var deferred = $q.defer();
        $http({
                method: 'post',
                url: '/nitemOne',
                data: {id: itemId }
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };


    newRecommService.update = function (id, itemId) {
        var deferred = $q.defer();
        $http({
            method: 'post',
            url: '/newRecUpdate',
            data: { id: id, itemId: itemId }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    newRecommService.delete = function (id) {
        var deferred = $q.defer();

        $http({
            method: 'post',
            url: '/newRecDelete',
            data: {id: id }
        }).success(function (data) {
                deferred.resolve(data);
            }
        );
        return deferred.promise;
    };

    return newRecommService;
});
