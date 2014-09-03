var app = angular.module('jobDetailsController', []);
app.controller('jobDetails', ['$scope', function ($scope) {
    
  $scope.organizationCategories = ["Immigration", "Education", "Civic engagement", "Media", "Job and workplace", "consumer protection"];  
  $scope.members = ["Robert de Bakker", "Lydia jnasen", "Marleen Bosch"];
  $scope.jobPost = [{jobTitle: "Football Refree Volunteering", client:"Posted 1 month ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:0, status:"Closed", jobDate: '1 month ago'},
        {jobTitle: "Volunteer Grant Writers", client:"Posted 1 month ago by Sander Noteborn" ,Applicants: 50, messaged: 3, hired:2, status:"Open", jobDate: '1 month ago'},
        {jobTitle: "Volunteer Coordinator - Volunteer", client:"Posted 4 days ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:1, status:"Open", jobDate: '4 days ago'},
        {jobTitle: "Crowd Control Volunteering", client:"Posted 6 weeks ago by Sander Noteborn", Applicants: 43, messaged: 3, hired:0, status:"Open", jobDate: '6 weeks ago'},
        {jobTitle: "Football Refree Volunteer", client:"Posted 2 months ago by Sander Noteborn", Applicants: 27, messaged: 2, hired:0, status:"Closed", jobDate: '2 month ago'},
        {jobTitle: "Outreach Volunteer", client:"Posted 2 years ago by Sander Noteborn", Applicants: 27, messaged: 1, hired:0, status:"Closed", jobDate: '2 years ago'},
        {jobTitle: "Crowd Control Volunteer", client:"Posted 2 weeks ago by Sander Noteborn", Applicants: 43, messaged: 4, hired:2, status:"Closed", jobDate: '2 weeks ago'},
        {jobTitle: "Public Relation Intern - Volunteer", client:"Posted 10 days ago by Sander Noteborn", Applicants: 34, messaged: 3, hired:2, status:"Open", jobDate: '10 days ago'}];
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  $scope.organizationName = getParameterByName('organizationName');
}]);