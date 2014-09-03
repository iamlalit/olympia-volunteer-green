var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.listOfSchools = [];
    $scope.lengthOfSchools = $scope.listOfSchools.length;
    var
	errorDiv = $('#errorMsg'),
	errorList = $('#errorList');
    $('#errorMsg').hide();
    var schoolAns1 = $("#schoolAns1");
    var schoolAns2 = $("#schoolAns2");
    var schoolAns3 = $("#schoolAns3");
    var schoolAns4 = $("#schoolAns4");
    var schoolAns5 = $("#schoolAns5");

    $('#errorMsg1').hide();
    var errorList1 = $('#errorList1');
    var jobAns1 = $("#jobAns1");
    var jobAns2 = $("#jobAns2");
    var jobAns3 = $("#jobAns3");
    var jobAns4 = $("#jobAns4");
    var jobAns5 = $("#jobAns5");
    var jobAns6 = $("#jobAns6");
    var jobAns7 = $("#jobAns7");
    var setCurrentDate = ("#setCurrentDate");
    $scope.listOfJobs = [];
    $scope.lengthOfJobs = $scope.listOfJobs.length;


    $scope.updateSchoolDetails = function(obj, check, index){
        if(schoolAns1.val() == '' || schoolAns1.val() == null){
        	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns1.focus();
                })
                $('#errorMsg').show();
                schoolAns1.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns1.parent().hasClass('has-error')) {
	                schoolAns1.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
	                errorList.find('.errormessage-schoolAns1').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns2.val() == '' || schoolAns2.val() == null){
        	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns2.focus();
                })
                $('#errorMsg').show();
                schoolAns2.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns2.parent().hasClass('has-error')) {
	                schoolAns2.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
	                errorList.find('.errormessage-schoolAns2').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns3.val() == '' || schoolAns3.val() == null){
        	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns3.focus();
                })
                $('#errorMsg').show();
                schoolAns3.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns3.parent().hasClass('has-error')) {
	                schoolAns3.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
	                errorList.find('.errormessage-schoolAns3').remove();
	                $('#errorMsg').hide();
	            }
        }

        if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                .appendTo(errorList)
                .click(function () {
                	console.log("clicked");
                    $("#schoolAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                schoolAns4.parent().addClass('has-error');
                schoolAns5.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
	                schoolAns4.parent().removeClass('has-error');
	                schoolAns5.parent().removeClass('has-error');
	            };
	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
	                errorList.find('.errormessage-schoolAns4').remove();
	                $('#errorMsg').hide();
	            }
        }

        schoolAns1.change(function() {
            if(schoolAns1.val() == '' || schoolAns1.val() == null){
            	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                    $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns1.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns1.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns1.parent().hasClass('has-error')) {
    	                schoolAns1.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
    	                errorList.find('.errormessage-schoolAns1').remove();
    	            }
            }
        });

        schoolAns2.change(function() {
            if(schoolAns2.val() == '' || schoolAns2.val() == null){
            	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                    $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns2.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns2.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns2.parent().hasClass('has-error')) {
    	                schoolAns2.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
    	                errorList.find('.errormessage-schoolAns2').remove();
    	            }
            }
        });

        schoolAns3.change(function() {
            if(schoolAns3.val() == '' || schoolAns3.val() == null){
            	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                    $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns3.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns3.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns3.parent().hasClass('has-error')) {
    	                schoolAns3.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
    	                errorList.find('.errormessage-schoolAns3').remove();
    	            }
            }
        });

        schoolAns4.change(function() {

    	    if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
    			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                    $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                    .appendTo(errorList)
                    .click(function () {
                    	console.log("clicked");
                        $("#schoolAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    schoolAns4.parent().addClass('has-error');
                    schoolAns5.parent().addClass('has-error');
                }
            }else {
            	console.log("updated");
    	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
    	                schoolAns4.parent().removeClass('has-error');
    	                schoolAns5.parent().removeClass('has-error');
    	            };
    	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
    	                errorList.find('.errormessage-schoolAns4').remove();
    	            }
    	        }
        });

        schoolAns5.change(function() {

    	    if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
    			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                    $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                    .appendTo(errorList)
                    .click(function () {
                    	console.log("clicked");
                        $("#schoolAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    schoolAns4.parent().addClass('has-error');
                    schoolAns5.parent().addClass('has-error');
                }
            }else {
            	console.log("updated");
    	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
    	                schoolAns4.parent().removeClass('has-error');
    	                schoolAns5.parent().removeClass('has-error');
    	            };
    	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
    	                errorList.find('.errormessage-schoolAns4').remove();
    	            }
    	        }
        });
        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
        } else {
            $('#errorMsg').hide();
            $scope.listOfSchools.push(obj);
	        $scope.lengthOfSchools = $scope.listOfSchools.length;
	        $scope.school = {};
	        $scope.school.startDate = 0;
	        $scope.school.endDate = 0;
        }
        if(check == 1 && !errorList.children('li').length > 0){
        	$('#addSchool').modal('hide');
        }
        if(check == 2){
            console.log($scope.listOfSchools[index].name);
        }
    }
    $scope.schoolCancel = function(){
    	$('#errorMsg').hide();
    	$scope.lengthOfSchools = $scope.listOfSchools.length;
        $scope.school = {};
        $scope.school.startDate = 0;
        $scope.school.endDate = 0;
        $scope.school.description = '';
    	$('#addSchool').modal('hide');
        schoolAns1.parent().removeClass('has-error');
        schoolAns2.parent().removeClass('has-error');
        schoolAns3.parent().removeClass('has-error');
        schoolAns4.parent().removeClass('has-error');
        schoolAns5.parent().removeClass('has-error');
    }

    $scope.jobCancel = function(){
        $('#errorMsg1').hide();
        $scope.lengthOfJobs = $scope.listOfJobs.length;
        $scope.job = {};
        $('#addJob').modal('hide');
        jobAns1.parent().removeClass('has-error');
        jobAns2.parent().removeClass('has-error');
        jobAns3.parent().removeClass('has-error');
        jobAns4.parent().removeClass('has-error');
        jobAns5.parent().removeClass('has-error');
        jobAns6.parent().removeClass('has-error');
        jobAns7.parent().removeClass('has-error');
        $scope.job.startDate = 0;
        $scope.job.endDate = 0;
        $scope.job.month1 = 0;
        $scope.job.month2 = 0;
        $scope.job.country = 'Netherlands';
        $scope.setCurrentDate = false;
        $scope.job.description = '';
    }

    $scope.updateJobDetails = function(obj, check){
        if(jobAns1.val() == '' || jobAns1.val() == null){
            if (errorList1.find('.errormessage-jobAns1').length == 0) {
                $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-jobAns1' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns1.focus();
                })
                $('#errorMsg1').show();
                jobAns1.parent().addClass('has-error');
            }
        }else {
                if (jobAns1.parent().hasClass('has-error')) {
                    jobAns1.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns1').length > 0) {
                    errorList1.find('.errormessage-jobAns1').remove();
                    $('#errorMsg1').hide();
                }
        }

        if(jobAns2.val() == '' || jobAns2.val() == null){
            if (errorList1.find('.errormessage-jobAns2').length == 0) {
                $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-jobAns2' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns2.focus();
                })
                $('#errorMsg1').show();
                jobAns2.parent().addClass('has-error');
            }
        }else {
                if (jobAns2.parent().hasClass('has-error')) {
                    jobAns2.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns2').length > 0) {
                    errorList1.find('.errormessage-jobAns2').remove();
                    $('#errorMsg1').hide();
                }
        }

        if(jobAns3.val() == '' || jobAns3.val() == null){
            if (errorList1.find('.errormessage-jobAns3').length == 0) {
                $('<li />', { html: 'Title required !', class: 'col-sm-6 errormessage-jobAns3' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns3.focus();
                })
                $('#errorMsg1').show();
                jobAns3.parent().addClass('has-error');
            }
        }else {
                if (jobAns3.parent().hasClass('has-error')) {
                    jobAns3.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns3').length > 0) {
                    errorList1.find('.errormessage-jobAns3').remove();
                    $('#errorMsg1').hide();
                }
        }

       if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
          || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
            if (errorList1.find('.errormessage-jobAns4').length == 0) {
                $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                .appendTo(errorList1)
                .click(function () {
                    console.log("clicked");
                    $("#jobAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                jobAns4.parent().addClass('has-error');
                jobAns5.parent().addClass('has-error');
                jobAns6.parent().addClass('has-error');
                jobAns7.parent().addClass('has-error');
            }
        }else {
                if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                    jobAns4.parent().removeClass('has-error');
                    jobAns5.parent().removeClass('has-error');
                    jobAns6.parent().removeClass('has-error');
                    jobAns7.parent().removeClass('has-error');
                };
                if (errorList1.find('.errormessage-jobAns4').length > 0) {
                    errorList1.find('.errormessage-jobAns4').remove();
                    $('#errorMsg1').hide();
                }
        }

        jobAns1.change(function() {
            if(jobAns1.val() == '' || jobAns1.val() == null){
                if (errorList1.find('.errormessage-jobAns1').length == 0) {
                    $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-jobAns1' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns1.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns1.parent().addClass('has-error');
                }
            }else {
                    if (jobAns1.parent().hasClass('has-error')) {
                        jobAns1.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns1').length > 0) {
                        errorList1.find('.errormessage-jobAns1').remove();
                    }
            }
        
        });

        jobAns2.change(function() {
            if(jobAns2.val() == '' || jobAns2.val() == null){
                if (errorList1.find('.errormessage-jobAns2').length == 0) {
                    $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-jobAns2' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns2.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns2.parent().addClass('has-error');
                }
            }else {
                    if (jobAns2.parent().hasClass('has-error')) {
                        jobAns2.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns2').length > 0) {
                        errorList1.find('.errormessage-jobAns2').remove();
                    }
            }
        });
        
        jobAns3.change(function() {
            if(jobAns3.val() == '' || jobAns3.val() == null){
                if (errorList1.find('.errormessage-jobAns3').length == 0) {
                    $('<li />', { html: 'Title required !', class: 'col-sm-6 errormessage-jobAns3' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns3.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns3.parent().addClass('has-error');
                }
            }else {
                    if (jobAns3.parent().hasClass('has-error')) {
                        jobAns3.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns3').length > 0) {
                        errorList1.find('.errormessage-jobAns3').remove();
                    }
            }
        });

        jobAns4.change(function() { 

           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns5.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns6.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns7.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });
        

        if (errorList1.children('li').length > 0) {
            $('#errorMsg1').show();
        } else {
            $('#errorMsg1').hide();
            $scope.listOfJobs.push(obj);
            $scope.lengthOfJobs = $scope.listOfJobs.length;
            $scope.job = {};
            $scope.job.startDate = 0;
            $scope.job.endDate = 0;
            $scope.job.month1 = 0;
            $scope.job.month2 = 0;
            $scope.setCurrentDate = false;
            $scope.job.country = 'Netherlands';
        }
        if(check == 1 && !(errorList1.children('li').length > 0)){
            $('#addJob').modal('hide');
        }

        if(check == 2){
            $('#addJob').modal('hide');
        }
    }
    $scope.setDate = function() {
        if ($scope.setCurrentDate == true) {
            var currentTime = new Date();
            var year = currentTime.getFullYear();
            var month = currentTime.getMonth() + 1;
            $scope.job.month2 = month;
            $scope.job.endDate = year;
            jobAns6.parent().removeClass('has-error');
            jobAns7.parent().removeClass('has-error');
        }else{
            $scope.job.month2 = 0;
            $scope.job.endDate = 0;
            jobAns6.parent().addClass('has-error');
            jobAns7.parent().addClass('has-error');
        }   
    }
 
    //edit functionality
    $scope.openSchoolModel = function(school, index) {
        $('#addSchool').modal('show');
        console.log($scope.listOfSchools[index]);
    }

}]);
