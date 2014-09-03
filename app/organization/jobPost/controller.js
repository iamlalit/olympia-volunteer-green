'use strict';
/* main App */
var app = angular.module('jobPostcontroller', ['ngTable']);

app.controller('jobPostCtrl', function($scope, $filter, ngTableParams){
	var data = [{jobTitle: "Volunteer Grant Writers", client:"Posted 1 month ago by Sander Noteborn" ,Applicants: 50, messaged: 3, hired:2, status:"Open", jobDate: '1 month ago'},
                {jobTitle: "Outreach Volunteer", client:"Posted 2 years ago by Sander Noteborn", Applicants: 27, messaged: 1, hired:0, status:"Closed", jobDate: '2 years ago'},
                {jobTitle: "Volunteer Coordinator - Volunteer", client:"Posted 4 days ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:1, status:"Open", jobDate: '4 days ago'},
                {jobTitle: "Crowd Control Volunteering", client:"Posted 6 weeks ago by Sander Noteborn", Applicants: 43, messaged: 3, hired:0, status:"Open", jobDate: '6 weeks ago'},
                {jobTitle: "Football Refree Volunteer", client:"Posted 2 months ago by Sander Noteborn", Applicants: 27, messaged: 2, hired:0, status:"Closed", jobDate: '2 month ago'},
                {jobTitle: "Volunteering Coordinator", client:"Posted 3 weeks ago by Sander Noteborn", Applicants: 34, messaged: 5, hired:3, status:"Open", jobDate: '3 weeks ago'},
                {jobTitle: "Crowd Control Volunteer", client:"Posted 2 weeks ago by Sander Noteborn", Applicants: 43, messaged: 4, hired:2, status:"Closed", jobDate: '2 weeks ago'},
                {jobTitle: "Football Refree Volunteering", client:"Posted 1 month ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:0, status:"Closed", jobDate: '1 month ago'},
                {jobTitle: "Public Relation Intern - Volunteer", client:"Posted 10 days ago by Sander Noteborn", Applicants: 34, messaged: 3, hired:2, status:"Open", jobDate: '10 days ago'}];


    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            jobTitle: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});