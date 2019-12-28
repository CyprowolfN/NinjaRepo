var myApp = angular.module('myApp',['ngRoute']);


myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

  //This basically removes all of the extra jazz that comes along with angulars routing like %2F in the Url
  $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
          templateUrl: 'views/home.html'
        })
        .when('/directory', {
          templateUrl: 'views/directory.html',
          controller: 'NinjaCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        });

}]);


myApp.controller('NinjaCtrl',['$scope','$http', function($scope,$http){

  //Delete a ninja from the list
    $scope.removeNinja = function(ninja){
      var removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: parseInt($scope.newNinja.rate)
      });
      //After saving the new Ninja return the properties back to empty strings
        $scope.newNinja.name = '';
        $scope.newNinja.belt = '';
        $scope.newNinja.rate = '';
    };
    // getting ninja Data from the ninjas.json file
      $http.get('data/ninjas.json').success(function(data){
          $scope.ninjas = data;
      });

    //This is simply for turning the array into a json
    //console.log(angular.toJson($scope.ninjas));

}]);
