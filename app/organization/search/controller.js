'use strict';
/* main App */
var app = angular.module('searchVolController', []);

app.controller('searchVolCtrl', function($scope){
	//Dummy data
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
        	
  $scope.sortByList = ['Best Match', 'Newest Applicants', 'Oldest Applicants', 'Feedback'];
	
  $scope.Applicants = [];
	$scope.Applicants.push({Name:"Marleen Bosch",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taken place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            statusColor: 'red',
            joined: 'Joined 1 year ago',
            invited: true,   
            selected: false,
            value: false
    }); 
	$scope.Applicants.push({Name:"Geertruda Brouwer",
            job: 'QA Specialist',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'My name is Geertruda Brouwer, I am 53 years of age. I am a Ghanaian fromm the Volta-Region in a small village called Sokode-Gbogame. I am a physically challenged person.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            statusColor: 'green',    
            joined: 'Joined 5 year ago',
            invited: false,
            selected: false,
            value: false
    }); 
	$scope.Applicants.push({Name:"Jan-Klaassen Groot",
            job: 'QA Engineer',
            city: 'De Kwakel, Noord Holland', 
            bodyText: 'I am interested in any position open, in your organization, concerning web development, design, database administration, or other infotech including the position posted. Please click here for optimal viewing of my curriculum vitae.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 3 months ago',
            invited: false,
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"Geertruda Dekker",
            job: 'Automation Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taking place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 1 day ago',
            invited: true,
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Hendrik Brouwer",
            job: 'QA Analyst',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 6 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Applicants.push({Name:"Driel Brouwer",
            job: 'QA Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 2 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      
      $scope.Applicants.push({Name:"Joep Jacobs",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taken place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            statusColor: 'red',
            joined: 'Joined 1 year ago',
            invited: true,   
            selected: false,
            value: false
    }); 
  $scope.Applicants.push({Name:"Sterre Jansen",
            job: 'QA Specialist',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'My name is Geertruda Brouwer, I am 53 years of age. I am a Ghanaian fromm the Volta-Region in a small village called Sokode-Gbogame. I am a physically challenged person.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            statusColor: 'green',    
            joined: 'Joined 5 year ago',
            invited: false,
            selected: false,
            value: false
    }); 
  $scope.Applicants.push({Name:"Geertruda Hoek",
            job: 'QA Engineer',
            city: 'De Kwakel, Noord Holland', 
            bodyText: 'I am interested in any position open, in your organization, concerning web development, design, database administration, or other infotech including the position posted. Please click here for optimal viewing of my curriculum vitae.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 3 months ago',
            invited: false,
            selected: false,
            value: false    
    }); 
  $scope.Applicants.push({Name:"Driel Hendriks",
            job: 'Automation Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taking place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 1 day ago',
            invited: true,
            selected: false,
            value: false      
    }); 
  $scope.Applicants.push({Name:"Els Dekker",
            job: 'QA Analyst',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 6 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Applicants.push({Name:"Hans Dijkstra",
            job: 'QA Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 2 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      


      $scope.favouriteApplicants = [];
      $scope.groupedItems = [];
      $scope.applicantsPerPage = 8;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.lengthOfApplicants = $scope.Applicants.length;
      $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      
      // calculate page in place
      $scope.calculateLength = function(){
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      }
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.lengthOfApplicants; i++) {
            if (i % $scope.applicantsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)] = [ $scope.Applicants[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)].push($scope.Applicants[i]);
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
      //to add applicant into favourite applicant list
      $scope.copyApplicant = function(item, from, to) {
            var idx=from.indexOf(item);
            //to check for uncommon objects
            $scope.Applicants[idx].selected = !$scope.Applicants[idx].selected;
            if($scope.Applicants[idx].selected){
                
                var check = true;
                if (idx != -1) {
                      for (var i = 0; i <= $scope.lengthOfFavouriteApplicants; i++) {
                            if(JSON.stringify(item) === JSON.stringify($scope.favouriteApplicants[i]) ){
                                  check = false;
                            }
                      };
                      if(check == true){
                            $scope.Applicants[idx].selected = false;
                            item.selected = true;
                            to.push(item);
                      }
                }   

            }else{
                console.log("unselect me");
                $scope.deleteApplicant(item, to,from);
            }
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      };
      //to remove the applicant from favourite applicants list
      $scope.deleteApplicant = function(item, from, to){
            var idx=from.indexOf(item);
            var idx2=to.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
            }
            console.log($scope.Applicants[idx2]);     
            $scope.Applicants[idx2].selected = false;
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      }
      //to clear all th search result
      $scope.clearSearch = function(){
            $scope.Applicants = [];
            $scope.pagedItems = [];
            $scope.lengthOfApplicants = $scope.Applicants.length;
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems.length;
      }
      $scope.dismissModal = function() { }
      $scope.openModal = function(object) {
            $scope.modalApplicant = object;
       }


});

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