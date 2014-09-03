var changePasswordController = angular.module('changePasswordController', [])

.controller('changePasswordCntrl', ['$scope', function ($scope) {
    var
    errorDiv = $('#errorMsg'),
    errorList = $('#errorList'),
    password1 = $('#password1'),
    password2 = $('#password2'),
    password3 = $('#password3');
    $('#errorMsg').hide();
    $scope.cancel = function() {
        $scope.password.old = '';
        $scope.password.newp = '';
        $scope.password.retype = '';
        errorList.find('.errormessage-password1').remove();
        errorList.find('.errormessage-password2').remove();
        errorList.find('.errormessage-password3').remove();
        $('#errorMsg').hide();
    }

    $scope.changePassword = function() {
        console.log("in password")
  
        if (password1.val() == '' || password1.val() == null) {
            if (errorList.find('.errormessage-password1').length == 0) {
                $('<li />', { html: 'Old password required !', class: 'col-sm-6 errormessage-password1' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: password1.offset().top - 100
                    }, 500);
                    password1.focus();
                })
                $('#errorMsg').show();
                password1.parent().addClass('has-error');
            }
        }
        else {
            if (password1.parent().hasClass('has-error')) {
                password1.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-password1').length > 0) {
                errorList.find('.errormessage-password1').remove();
                $('#errorMsg').hide();
            }
        }
        if (password2.val() == '' || password2.val() == null) {
            if (errorList.find('.errormessage-password2').length == 0) {
                var li = $('<li />', {html: 'New password required !', class: 'col-sm-6 errormessage-password2' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: password2.offset().top - 100
                    }, 500);
                    password2.focus();
                });
                $('#errorMsg').show();
                password2.parent().addClass('has-error');
            }
        } else {  
            if (password2.parent().hasClass('has-error')) {
                password2.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-password2').length > 0) {
                errorList.find('.errormessage-password2').remove();
                $('#errorMsg').hide();
            }
        }
        if (password3.val() == '' || password3.val() == null) {
            if (errorList.find('.errormessage-password3').length == 0) {
                var li = $('<li />', {html: 'Retype new password required!', class: 'col-sm-6 errormessage-password3' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: password3.offset().top - 100
                    }, 500);
                    password3.focus();
                });
                $('#errorMsg').show();
                password3.parent().addClass('has-error');
            }
        } else {
            if (password3.parent().hasClass('has-error')) {
                password3.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-password3').length > 0) {
                errorList.find('.errormessage-password3').remove();
                $('#errorMsg').hide();
            }
        }
        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
            $('html, body').animate({
                scrollTop: 100
            }, 500);
        } else {
            $('#errorMsg').hide();
            window.location.href = "../confirmation/confirmation.html";
        }
    };

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');

}]);

    
