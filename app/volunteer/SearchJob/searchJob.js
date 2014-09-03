var app = angular.module('searchJobController', []);
app.controller('searchJob', ['$scope', function ($scope) {
    
    //search job logi starts
      $scope.categories = ['Aggriculture', 'Animals', 'Arts', 'Communications access', 
    'Community development', 'conflict resolution'];
    
      $scope.skills = ['Answering Telephones', 'Accounting', 'Administration', 'Business Correspondence', 'Client Relations', 'Communication',
            'Crowd Control', 'Crime & Safety', 'Customer Service', 'Cooking', 'Clerical', 'Document Management', 'Disaster Relief', 
            'Event Coordination', 'Employee Relations', 'Legal Familiarity', 'Meeting Planning', 'Office Administration',
            'Organizational Skills', 'Problem Solving', 'Public Relations', 'Public Speaking', 'People Management', 'Receptionist', 'Stenography', 
            'Travel Arrangements', 'Word Processing', 'Written Communication'];
    
      $scope.diplomas = ['First Aid Diploma', 'Community Service Coordination', 'Football Referee License', 'Active Volunteering', 'Training and Assessmement', 
                  'Program Coordination', 'Effective Communication', 'Negotiation', 
                  'Customer Service', 'Risk Management'];

      $scope.languages = ['Afrikaans','Albanian', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 
            'Catalan', 'Cebuano', 'Chinese', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Filipino', 'French', 'Georgian', 
            'German', 'Greek', 'Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Irish', 'Italian', 'Japanese', 
            'Korean', 'Lao', 'Latin', 'Mongolian', 'Norwegian', 'Persian', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 
            'Spanish',  'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yoruba',
             'Zulu'];

      $scope.timePreference = ['Monday - Full day', 'Tuesday - Full day', 'Wednesday - Full day', 'Thursday - Full day', 'Friday - Full day', 'Saturday - Full day', 'Sunday - Full day', 
            'Monday - Morning', 'Tuesday - Morning', 'Wednesday - Morning', 'Thursday - Morning', 'Friday - Morning', 'Saturday - Morning', 'Sunday - Morning', 
            'Monday - Afternoon', 'Tuesday - Afternoon', 'Wednesday - Afternoon', 'Thursday - Afternoon', 'Friday - Afternoon', 'Saturday - Afternoon', 'Sunday - Afternoon', 
            'Monday - Evening', 'Tuesday - Evening', 'Wednesday - Evening', 'Thursday - Evening', 'Friday - Evening', 'Saturday - Evening', 'Sunday - Evening', 
            'Monday - Late Night', 'Tuesday - Late Night', 'Wednesday - Late Night', 'Thursday - Late Night', 'Friday - Late Night', 'Saturday - Late Night', 'Sunday - Late Night'];
            
  $scope.sortByList = ['Newest Jobs', 'Best Match', 'Oldest Jobs', 'Feedback'];
    
  $scope.Jobs = [];
    $scope.Jobs.push({Name:"Student Activist Coordinator",
            company: 'Red cross NL',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'Are you a student looking for a way to develop as a human rights leader? Would you like to take your activism to a new level? make an investment in Amnesty and Amnesty will make an investment in you.',
            about: 'About 1 hour ago',
            invited: true,   
            selected: false,
            value: false
    }); 
    $scope.Jobs.push({Name:"Kenyan Internship",
            company: 'Red cross NL',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'Intern in kenya work primarily in rural settings and provide support to the community and its leaders. The interns also learn about the rich cultures of Kenya while sharing their own gifts, experience and insights. Our headquarters are located in Nairobi but you will be contacted on phone first.',
            status: '4/4 diploma/certificate/skills',     
            about: 'About 5 hours ago',
            invited: false,
            selected: false,
            value: false
    }); 
    $scope.Jobs.push({Name:"Middle School Tutor",
            company: 'Global Conscience Initiative',
            city: 'De Kwakel, Noord Holland', 
            bodyText: "Global Conscience Initiative seeks to the address and improve Cameroon's most pressing human right issues: chiefly, Corruption. abuse of prisoner's, gender discrimination and etc.",
            about: 'About 3 hours ago',
            invited: false,
            selected: false,
            value: false    
    }); 
    $scope.Jobs.push({Name:"Student Activist Coordinator",
            company: 'Global Conscience Initiative',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            about: 'About 6 hours ago',
            invited: false,
            selected: true,      
            value: false
    }); 
    $scope.Jobs.push({Name:"Photographer",
            company: 'Global Conscience Initiative',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'Photographer: Volunteering is a wonderful way to give back to the community. We are looking ideally for someone who would like to use their skills and their time to benefit out organization, which has existed for over 50 years and support.',
            about: 'About 1 hours ago',
            invited: true,
            selected: false,
            value: false      
    }); 
    $scope.Jobs.push({Name:"Crowd Controller",
            company: 'Red cross NL',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            about: 'About 6 hours ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Jobs.push({Name:"Student Activist Coordinator",
            company: 'Red cross NL',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'Are you a student looking for a way to develop as a human rights leader? Would you like to take your activism to a new level? make an investment in Amnesty and Amnesty will make an investment in you.',
            about: 'About 2 hours ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      
      $scope.Jobs.push({Name:"Kenyan Internship",
            company: 'Global Conscience Initiative',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'Intern in kenya work primarily in rural settings and provide support to the community and its leaders. The interns also learn about the rich cultures of Kenya while sharing their own gifts, experience and insights. Our headquarters are located in Nairobi but you will be contacted on phone first.',
            about: 'About 1 hour ago',
            invited: true,   
            selected: false,
            value: false
    }); 
  $scope.Jobs.push({Name:"Middle School Tutor",
            company: 'Global Conscience Initiative',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: "Global Conscience Initiative seeks to the address and improve Cameroon's most pressing human right issues: chiefly, Corruption. abuse of prisoner's, gender discrimination and etc.",
            status: '4/4 diploma/certificate/skills',     
            about: 'About 5 hours ago',
            invited: false,
            selected: false,
            value: false
    }); 
  $scope.Jobs.push({Name:"Photographer",
            company: 'Global Conscience Initiative',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'Photographer: Volunteering is a wonderful way to give back to the community. We are looking ideally for someone who would like to use their skills and their time to benefit out organization, which has existed for over 50 years and support.',
            about: 'About 1 hour ago',
            invited: true,
            selected: false,
            value: false      
    }); 
      $scope.Jobs.push({Name:"Kenyan Internship",
            company: 'Red cross NL',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            about: 'About 2 hours ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Jobs.push({Name:"Middle School Tutor",
            company: 'Red cross NL',
            city: 'De Kwakel, Noord Holland', 
            bodyText: "Global Conscience Initiative seeks to the address and improve Cameroon's most pressing human right issues: chiefly, Corruption. abuse of prisoner's, gender discrimination and etc.",
            about: 'About 3 hours ago',
            invited: false,
            selected: false,
            value: false    
    }); 
      


      $scope.favouriteJobs = [];
      $scope.groupedItems = [];
      $scope.JobsPerPage = 8;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.lengthOfJobs = $scope.Jobs.length;
      $scope.lengthOfFavouriteJobs = $scope.favouriteJobs.length;
      
      // calculate page in place
      $scope.calculateLength = function(){
            $scope.lengthOfJobsPerPage = $scope.pagedItems[$scope.currentPage].length;
      }
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.lengthOfJobs; i++) {
            if (i % $scope.JobsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.JobsPerPage)] = [ $scope.Jobs[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.JobsPerPage)].push($scope.Jobs[i]);
            }
        }
        $scope.calculateLength();
      };
      $scope.groupToPages();
      $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                  end = start;
                  start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
      };
      $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                  $scope.currentPage--;
            }
            $scope.calculateLength();
      };
      $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                  $scope.currentPage++;
            }
            $scope.calculateLength();
      };
      $scope.setPage = function () {
            $scope.currentPage = this.n;
            $scope.calculateLength();
      };

      
      //Specific functions
      //to add Jobinto favourite Joblist
      $scope.copyJob= function(item, from, to) {
            var idx=from.indexOf(item);
            //to check for uncommon objects
            $scope.Jobs[idx].selected = !$scope.Jobs[idx].selected;
            if($scope.Jobs[idx].selected){
                
                var check = true;
                if (idx != -1) {
                      for (var i = 0; i <= $scope.lengthOfFavouriteJobs; i++) {
                            if(JSON.stringify(item) === JSON.stringify($scope.favouriteJobs[i]) ){
                                  check = false;
                            }
                      };
                      if(check == true){
                            $scope.Jobs[idx].selected = false;
                            item.selected = true;
                            to.push(item);
                      }
                }   

            }else{
                console.log("unselect me");
                $scope.deleteJob(item, to,from);
            }
            $scope.lengthOfFavouriteJobs = $scope.favouriteJobs.length;
      };
      //to remove the Jobfrom favourite Jobs list
      $scope.deleteJob= function(item, from, to){
            var idx=from.indexOf(item);
            var idx2=to.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
            }
            console.log($scope.Jobs[idx2]);     
            $scope.Jobs[idx2].selected = false;
            $scope.lengthOfFavouriteJobs = $scope.favouriteJobs.length;
      }
      //to clear all th search result
      $scope.clearSearch = function(){
            $scope.Jobs = [];
            $scope.pagedItems = [];
            $scope.lengthOfJobs = $scope.Jobs.length;
            $scope.lengthOfJobsPerPage = $scope.pagedItems.length;
      }
      $scope.dismissModal = function() { }
      $scope.openModal = function(object) {
            $scope.modalJob= object;
       }

       $scope.CreateObject = function( job ) {
            window.location.href = "../jobDetails/jobDetails.html?jobName=" + job.Name +"&jobDate=" + job.about;
       }


    //search job logic ends
}]);

app.controller('modalVolCtrl', function($scope) {
      $scope.jobPost = [{jobTitle: "Volunteer Grant Writers", client:"Posted 1 month ago by Sander Noteborn" ,Applicants: 50, messaged: 3, hired:2, status:"Open"},
          {jobTitle: "Outreach Volunteer", client:"Posted 2 years ago by Sander Noteborn", Applicants: 27, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Volunteer Coordinator - Volunteer", client:"Posted 4 days ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:1, status:"Open"},
          {jobTitle: "Crowd Control Volunteering", client:"Posted 6 weeks ago by Sander Noteborn", Applicants: 43, messaged: 3, hired:0, status:"Open"},
          {jobTitle: "Football Refree Volunteer", client:"Posted 2 months ago by Sander Noteborn", Applicants: 27, messaged: 2, hired:0, status:"Closed"},
          {jobTitle: "Volunteering Coordinator", client:"Posted 3 weeks ago by Sander Noteborn", Applicants: 34, messaged: 5, hired:3, status:"Open"},
          {jobTitle: "Crowd Control Volunteer", client:"Posted 2 weeks ago by Sander Noteborn", Applicants: 43, messaged: 4, hired:2, status:"Closed"},
          {jobTitle: "Football Refree Volunteering", client:"Posted 1 month ago by Sander Noteborn", Applicants: 34, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Public Relation Intern - Volunteer", client:"Posted 10 days ago by Sander Noteborn", Applicants: 34, messaged: 3, hired:2, status:"Open"}];
      var message = "Hello, \n\n"+
                  "I'd like to personally invite you to apply to my job. Please review the job post and apply if you are available \n\n"+
                  "Rob";
      $("#modalMessage").val(message);
});