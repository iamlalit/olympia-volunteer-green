'use strict';
/* main App */
var app = angular.module('jobApplicationcontroller', ['ngTable']);

app.controller('jobAPPlicationCtrl', function($scope, $filter, ngTableParams){
	var data = [{jobTitle: "Volunteer Grant Writers", client:"Red Cross" , date:"14/11/2013", status:"Active"},
                {jobTitle: "Outreach Volunteer", client:"Red Cross",  date:"23/03/2014", status:"Archived", reason: "Declined by You"},
                {jobTitle: "Looking for Technical Volunteer", client:"Red Cross",  date:"19/11/2013", status:"Hired"},
                {jobTitle: "Website QA Engineering", client:"Red Cross",  date:"10/06/2013", status:"Hired"},
                {jobTitle: "Software Developer", client:"Red Cross",  date:"21/01/2014", status:"Sent"},
                {jobTitle: "Volunteering Coordinator", client:"Red Cross",  date:"30/07/2014", status:"Invited"},
                {jobTitle: "Crowd Control Volunteer", client:"Red Cross",  date:"08/05/2013", status:"invited"},
                {jobTitle: "Football Refree Volunteering", client:"Red Cross",  date:"04/02/2013", status:"Sent"},
                {jobTitle: "Software Designer", client:"Red Cross",  date:"20/12/2013", status:"Archived", reason: "Declined by You"},
                {jobTitle: "Public Relation Intern - Volunteer", client:"Red Cross",  date:"02/11/2012", status:"Archived", reason: "Declined by Organization"},
                {jobTitle: "Software Architecture", client:"Red Cross",  date:"29/06/2014", status:"Archived", reason: "Declined by Organization"},
                {jobTitle: "Software Analyst", client:"Red Cross",  date:"01/10/2012", status:"Archived", reason: "Declined by You"},];


    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20,          // count per page
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