// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
    name: "Luke Skywalker",
    address: {
      street: "PO Box 123",
      city: "Secret Rebel Base",
      planet: "Yavin 4"
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }

  $scope.user2 = {
    name: "Han Solo",
    address: {
      street: "PO Box 123",
      city: "Mos Eisley",
      planet: "Tattoine"
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }
})

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: "=",
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {

      $scope.collapsed = ($scope.initialCollapsed === 'true');

      $scope.knightMe = function(user) {
        user.rank = "Knight"
      }

      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
      
      $scope.removing = false;
      $scope.startRemove = function(){
        $scope.removing = true;
      }
      
      $scope.cancelRemove = function(){
        $scope.removing = false;
      }
        
      $scope.removeFriend = function(friend){
        var idx = $scope.user.friends.indexOf(friend);
        if (idx > -1) {
          $scope.user.friends.splice(idx,1);
        }
      }
    }
  }
})

angular.module('app').directive('address', function() {
  return {
    templateUrl: "address.html",
    restrict: "E",
    scope: true,
    controller: function($scope) {

      $scope.collapsed = false;

      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
    }
  }
})