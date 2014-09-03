var app = angular.module('jobDetailsController', []);
app.controller('jobDetails', ['$scope', function ($scope) {
    $scope.volunteerSkills = ['Cooking', 'Education', 'Caring for People', 'Communication', 'Crowd control', 'Damage control', 'First aid'];

    $scope.variableMoreLess = 3;
    $scope.listOfSchools = [];
    $scope.listOfJobs = [];
    $scope.areaFocuses = ["Disability", "Education", "Energy conservation", "Government reform", "Housing and homelessness"];
    $scope.contactVolWork = ["Micro - volunteering", "Orphanage", "Politics", "Volunteering in schools", "Research & science", "Eco-tourism"];
    $scope.contactVolDiploma = ["Program coordinator", "Negotiation", "Communication", "Football match refree"];
    $scope.contactVolTime = ["Weekends - Full day", "Monday - Late Night", "Thursday - Evening"];

    $scope.listOfSchools.push({
      'name': 'London School of Economics(University of London)',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.listOfSchools.push({
      'name': 'Harvard University School of Medicine',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.listOfSchools.push({
      'name': 'Tufts University School of Medicine',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.lengthOfSchools = $scope.listOfSchools.length;
    $scope.listOfJobs.push({
      'name': 'Micro Finance Volunteering Oppurtunities',
      'organization': 'Red Cross NL',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'description': 'Micro Projects Volunteering Program is mainly focused on rural Women & Youth empowerments programs in Nepal. This program generally supports the rural women & youths by means of short term professional training for various income generating schemes in order to make the system fruitful.'
    });
    $scope.listOfJobs.push({
      'name': 'Volunteer Event @ Durfee-Thompson School',
      'organization': 'Red Cross NL',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'description': 'Micro Projects Volunteering Program is mainly focused on rural Women & Youth empowerments programs in Nepal. This program generally supports the rural women & youths by means of short term professional training for various income generating schemes in order to make the system fruitful.'
    });
    $scope.lengthOfJobs = $scope.listOfJobs.length;
    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  $scope.volunteerName = getParameterByName('name');
  $scope.volunteerCity = getParameterByName('city');

}]);
