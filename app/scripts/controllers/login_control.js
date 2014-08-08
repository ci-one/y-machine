/**
 * Created by ci-one on 2014-08-06.
 */

function loginController($scope, $location, Accounts) {
    $scope.login_check = function () {
        var i = 0;
        for (i = 0; i < accounts.length; i++) {
            if ($scope.login_id == accounts[i].id) {
                if ($scope.login_pwd == accounts[i].pswd) {
                    //alert("1");
                    //       active_account = accounts[i].name;
                    Accounts.setName(accounts[i].name);
                    alert("로그인완료");
                    $location.path("/");
                    return;
                }
            }
        }
        alert("로그인에 실패하였습니다." + "\n아이디와 비밀번호를 확인하세요.");
    };
}

function loginStatueManager($scope, Accounts) {
    $scope.$watch(Accounts.getName,function() {
        $scope.active_account = Accounts.getName();
        $scope.login_button = "로그인";
        if(Accounts.getName()){
            $scope.active_greet = "님 환영합니다!";
            $scope.login_button = "로그아웃";
            $scope.loginSuccess();
        }
    });
}

function doLogoff($scope, Accounts) {
    Accounts.setName("");
    Accounts.logout();
    $scope.login_button = "로그인";
}