var app = angular.module('jobDetailsController', []);
app.controller('jobDetails', ['$scope', function ($scope) {
    $scope.applicantData = [];
    $scope.applicantData.push({'city': 'Amsterdam',
      'date': '10 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Boekel',
      'date': '5 days ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Bregtdorp',
      'date': '1 day ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Driemond',
      'date': '5 hours ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Callantsoog',
      'date': '10 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'De Westen',
      'date': '10 hours ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Keinsmerbrug',
      'date': '1 day ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Krommeniedijk',
      'date': '2 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Mennonietenbuurt',
      'date': '8 hours ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Oude-Niedorp',
      'date': '15 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.lengthOfApplicantData = $scope.applicantData.length;
    $scope.variableMoreLess = 3;

    $scope.areaFocuses = ["Disability", "Education", "Energy conservation", "Government reform", "Housing and homelessness"];
    $scope.postJobSkills = ["Crowd control", "Cooking", "Communication"];
    $scope.postJobDiploma = ["Program coordinator", "Negotiation"];
    $scope.postJobTime = ["Full time(30-40 hours/week)"];
    $scope.postJobEstimated = ["Less than 3 months", "Less than 1 months"];
    $scope.postJobTimeReq = ["Weekends - Full day", "Monday - Late Night"];
    $scope.postJobSchedule = ["Flexible schedule"];
    $scope.postJobIVO = ["Housing available"];
    $scope.postJobLanguage = ["English", "Dutch"];
    $scope.postJobMiscellaneous = ["Training provided", "Fee required"];

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  $scope.jobName = getParameterByName('jobName');
  $scope.jobDate = getParameterByName('jobDate');

  $scope.applyToJob = function(){
    window.location.href = "../jobApply/jobApply.html?jobName=" + $scope.jobName +"&jobDate=" + $scope.jobDate;
  }
}]);