var messageApp = angular.module('messageApp', []);

messageApp.controller('messageController', ['$scope', function ($scope) {
    $scope.compose = true;
    $scope.inbox = false;
    $scope.send = false;
    $scope.archive = false;
    $scope.currentnode = null;
    $scope.messageSidebar = [
        { 'name': 'Inbox' },
        { 'name': 'Sent' },
        { 'name': 'Archive' }
    ];
    $scope.toggle = function ($index) {
        $scope.currentnode = $index;
        if ($index == 0) {
            $scope.inbox = true;
            $scope.compose = false;
            $scope.send = false;
            $scope.archive = false;
        }
        else if ($index == 1) {
            $scope.send = true;
            $scope.compose = false;
            $scope.inbox = false;
            $scope.archive = false;
        }
        else if ($index == 2) {
            $scope.archive = true;
            $scope.compose = false;
            $scope.inbox = false;
            $scope.send = false;
        } else {
            $scope.compose = true;
            $scope.send = false;
            $scope.inbox = false;
            $scope.archive = false;
        }
    }
    //dummy data
    $scope.messageInbox = [];
    $scope.messageSent = [];
    $scope.messageArchive = [];
    $scope.messageInbox.push({name:"Henk-jan Bakker",
        date: "August 12",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageInbox.push({name:"Klaassen Bosch",
        date: "August 1",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageInbox.push({name:"Marleen Dijkstra",
        date: "June 18",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageInbox.push({name:"Jaap Hendriks",
        date: "Feburary 4",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageInbox.push({name:"Robin Hendriks",
        date: "January 29",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageInbox.push({name:"Hendrik Jansen",
        date: "January 1",
        checked: false,
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    }); 
    //sent messages
    $scope.messageSent.push({name:"Geertruda Hendriks",
        date: "August 3",
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageSent.push({name:"Rob-jan Brouwer",
        date: "January 10",
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });
    $scope.messageSent.push({name:"Klaassen Dijkstra",
        date: "January 8",
        title: "Lorem ipsum title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, tortor id ultricies eleifend, dui erat dapibus massa, quis aliquet lacus quam id leo."
    });


    $scope.lengthOfInbox = $scope.messageInbox.length;
    $scope.lengthOfSent = $scope.messageSent.length;
    $scope.lengthOfArchive = $scope.messageArchive.length;
    
    //function to add messages to archive list
    $scope.moveMessage = function() {
        var list = [];
        for (var i = 0; i < $scope.lengthOfInbox; i++) {
            if ($scope.messageInbox[i].checked == true) {
                $scope.messageArchive.push($scope.messageInbox[i]);
                list.push(i);
            }
        };
        for (var i = list.length-1; i >=0; i--) {
            $scope.messageInbox.splice(list[i], 1);
        };
        $scope.lengthOfInbox = $scope.messageInbox.length;
        $scope.lengthOfSent = $scope.messageSent.length;
        $scope.lengthOfArchive = $scope.messageArchive.length;
        for (var i = 0; i < $scope.lengthOfArchive; i++) {
            $scope.messageArchive[i].checked = false;
        };
    };
    //check all to be true and false
    $scope.checkAll = function () {
        if($scope.checkall) {
            for (var i = 0; i < $scope.lengthOfInbox; i++) {
                $scope.messageInbox[i].checked = true;
            };  
        }else {
            for (var i = 0; i < $scope.lengthOfInbox; i++) {
                $scope.messageInbox[i].checked = false;
            };
        }
    }
    //volunteer or organization
    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');
    //to display the message in detail
    $scope.passedMessaged = []
    $scope.passMessage = function(message) {
        $scope.passedMessaged = message;
    }
}]);