var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.organisationMenu = false;
    $scope.volunteerMenu = false;
    $scope.profileModel = [
        {
            'imgLink': '../img/4createyourprofile.png',
            'name': 'Amy McDougall',
            'skill': 'Writer/Translator'
        },
        {
            'imgLink': '../img/4createyourprofile1.png',
            'name': 'Betsy Chang',
            'skill': 'Customer Service agent'
        },
        {
            'imgLink': '../img/4createyourprofile2.png',
            'name': 'Darius Kasperitis',
            'skill': 'Python Developer'
        },
        {
            'imgLink': '../img/4createyourprofile2.png',
            'name': 'Marleen Dijkstra',
            'skill': 'Ruby on Rails Developer'
        },
        {
            'imgLink': '../img/4createyourprofile1.png',
            'name': 'Henk-jan Bosch',
            'skill': 'Crowd Controller'
        }
    

    ];

    var urlParams;
    var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);

    console.log(urlParams);

    var userType = urlParams.owner;
    var formType = urlParams.form;
    
    if (userType == 'organisation') {
        $scope.organisationMenu = true;
    }
    if (userType == 'volunteer') {
        $scope.volunteerMenu = true;
    }
}]);