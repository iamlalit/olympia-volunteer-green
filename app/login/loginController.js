var loginController = angular.module('loginController', []);
loginController.controller('loginCredentialCheck', ['$scope', function ($scope) {
    $scope.alertError = 'false';
    $scope.loginCheck = function (e) {
        $scope.alertError = 'false';
        var email = $('#email').val();
        var password = $('#pass').val();
        if (((email == 'volunteer@email.com' && password == 'password') || (email == 'volunteer%40email.com' && password == 'password')) || ((email == 'organisation@email.com' && password == 'password') || (email == 'organisation%40email.com' && password == 'password'))) {
            if (email == 'organisation@email.com' || email == 'organisation%40email.com') {
                document.location.href = "../organization/search/searchVol.html" + '?form=signup&name=organisation'
            } else {
                document.location.href = "../volunteer/SearchJob/searchJob.html" + '?form=signup&name=volunteer'
            }
            
        } else {
            $scope.alertError = 'true';
        }        
    }
}])