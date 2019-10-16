var myApp = angular.module('myApp',["ngRoute"]);


myApp.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when('/home', {
          templateUrl: 'views/home.html'
        })
        .when('/directory', {
          templateUrl: 'views/directory.html',
          controller:  'NinjaCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        });

}]);


myApp.controller('NinjaCtrl',['$scope','$http', function($scope,$http){

    $scope.removeNinja = function(ninja){
      let removedNinja = $scope.Ninjas.indexOf(ninja);
      $scope.Ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
      $scope.Ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: parseInt($scope.newNinja.rate)
      });
        $scope.newNinja.name = '';
        $scope.newNinja.belt = '';
        $scope.newNinja.rate = '';
    };

      $http.get('data/ninjas.json')
      .success(function(data){
          $scope.Ninjas = data;
      });

    //This is simply for turning the array into a json
    //console.log(angular.toJson($scope.Ninjas));

}]);
