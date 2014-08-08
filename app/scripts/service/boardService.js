/**
 * Created by wealab04 on 2014-08-05.
 */
var app = angular.module("mcApp", ['angularFileUpload']);

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

        for ($file = 0; $file < $filess.length; $file++) {
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
        }

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
    this.idChk = function(id, pswd){
        var deferred = $q.defer();

        $http({
            url : '/idChk',
            method : 'post',
            data : {id:id, pswd:pswd}
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(status) {
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

app.controller('ctrlDetailNotice',function($scope, $routeParams, noticeService){
    var i = $routeParams.id;
    noticeService.one(i).then(function(result){
        $scope.item = result[0];
    });
});

app.controller('ctrlListNotice',function($scope, $routeParams, noticeService){
    noticeService.list().then(function(result){
        $scope.item = result;
    });
});
