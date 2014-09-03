'use strict';
/* main App */
var app = angular.module('viewAppcontroller', []);

app.controller('viewAppCtrl', function($scope){
	$scope.sortByList = ['Best Match', 'Newest Applicants', 'Oldest Applicants', 'Feedback'];

	$scope.Applicants = [];
	$scope.hiddenApplicants = [];
    $scope.shortlistedApplicants = [];
    $scope.messagedApplicants = [];
    $scope.hiredApplicants = [];
    $scope.hiddenModalData = ["Okay, but not quite right", "Poor comments in work history", "Poor quality of work letter", "Other", "Report to volunteer"];
	$scope.Applicants.push({Name:"Marleen Bosch",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            statusColor: 'red',
            invited: true,   
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Geertruda Brouwer",
            job: 'QA Specialist',
            city: 'Rotterdam, Noord Holland', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            statusColor: 'green',    
            invited: false,
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Jan-Klaassen Groot",
            job: 'QA Engineer',
            city: 'Utrecht, Noord Holland', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: false,
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"Geertruda Dekker",
            job: 'Automation Engineer',
            city: 'Tilburg, Noord Holland', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: true,
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Hendrik Brouwer",
            job: 'QA Analyst',
            city: 'Breda, Noord Holland', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: false,
            selected: false,      
            value: false
    }); 
	//find number of applicants
	$scope.lengthOfApplicants = $scope.Applicants.length;
	$scope.lengthOfHiddenApplicants = $scope.hiddenApplicants.length;
    $scope.lengthOfshortlistedApplicants = $scope.shortlistedApplicants.length;
    $scope.lengthOfMessagedApplicants = $scope.messagedApplicants.length;
    $scope.lengthOfHiredApplicants = $scope.hiredApplicants.length;
	//hidden applicant functionality
	$scope.moveApplicant = function(item, from, to) {
        var idx=from.indexOf(item);
        console.log(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);      
        }
    	$scope.lengthOfApplicants = $scope.Applicants.length;
        $scope.lengthOfHiddenApplicants = $scope.hiddenApplicants.length;
        $scope.lengthOfshortlistedApplicants = $scope.shortlistedApplicants.length;
        $scope.lengthOfMessagedApplicants = $scope.messagedApplicants.length;
        $scope.lengthOfHiredApplicants = $scope.hiredApplicants.length;
    };
    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
      $scope.jobTitle = getParameterByName('jobTitle');

});

var element_title = "<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>Football refree license</span><br/>" +
                    "<i class='icon-exclamation-sign font-size-1-7' style='color:#b25a01;padding-right:7px;'></i><span style='vertical-align:top;'>First aid certification</span><br/>" +
                    "<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>Cooking</span><br/>" +
                    "<i class='icon-exclamation-sign font-size-1-7' style='color:#b25a01;padding-right:7px;'></i><span style='vertical-align:top;'>Crowd control</span>" 
app.directive('hoverPopover', function ($compile, $templateCache, $timeout, $rootScope) {
var getTemplate = function (contentType) {
    return $templateCache.get(element_title);
	};
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        var content = getTemplate();
        $rootScope.insidePopover = false;
        $(element).popover({
        	content:  element_title,
            placement: 'right',
            html: true
        });
        $(element).bind('mouseenter', function (e) {
            $timeout(function () {
                if (!$rootScope.insidePopover) {
                    $(element).popover('show');
                    scope.attachEvents(element);
                }
            }, 200);
        });
        $(element).bind('mouseleave', function (e) {
            $timeout(function () {
                if (!$rootScope.insidePopover)
                    $(element).popover('hide');
            }, 400);
        });
    },
    controller: function ($scope, $element) {
        $scope.attachEvents = function (element) {
            $('.popover').on('mouseenter', function () {
                $rootScope.insidePopover = true;
            });
            $('.popover').on('mouseleave', function () {
                $rootScope.insidePopover = false;
                $(element).popover('hide');
            });
        }
    }
};
});

var element_title_green = "<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>Football refree license</span><br/>" +
					"<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>First aid certification</span><br/>" +
					"<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>Cooking</span><br/>" +
					"<i class='icon-exclamation-sign font-size-1-7' style='color:#009e0f;padding-right:7px;'></i><span style='vertical-align:top;'>Crowd control</span>" 
app.directive('hoverPopover1', function ($compile, $templateCache, $timeout, $rootScope) {
var getTemplate = function (contentType) {
    return $templateCache.get(element_title);
	};
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        var content = getTemplate();
        $rootScope.insidePopover = false;
        $(element).popover({
        	content:  element_title_green,
            placement: 'right',
            html: true
        });
        $(element).bind('mouseenter', function (e) {
            $timeout(function () {
                if (!$rootScope.insidePopover) {
                    $(element).popover('show');
                    scope.attachEvents(element);
                }
            }, 200);
        });
        $(element).bind('mouseleave', function (e) {
            $timeout(function () {
                if (!$rootScope.insidePopover)
                    $(element).popover('hide');
            }, 400);
        });
    },
    controller: function ($scope, $element) {
        $scope.attachEvents = function (element) {
            $('.popover').on('mouseenter', function () {
                $rootScope.insidePopover = true;
            });
            $('.popover').on('mouseleave', function () {
                $rootScope.insidePopover = false;
                $(element).popover('hide');
            });
        }
    }
};
});