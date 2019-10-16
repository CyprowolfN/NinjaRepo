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


myApp.controller('NinjaCtrl',['$scope', function($scope){

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
    }

    $scope.Ninjas = [
      {
        name:'Yoshi',
        belt:'Green',
        rate: 50,
        thumb:"content/Images/Yosi.jpg"
      },
      {
        name:'Crystal',
        belt:'Yellow',
        rate: 60,
        thumb:"content/Images/Crystal.jpeg"
      },
      {
        name:'Ryu',
        belt:'Brown',
        rate: 500,
        thumb:"content/Images/Ryu.png"
      },
      {
        name:'Nick',
        belt:'Purple',
        rate: 2000,
        thumb:"content/Images/Nick.jpg"
      },
      {
        name:'David',
        belt:'Black',
        rate: 800,
        thumb:"content/Images/David.png"
      },
      {
        name:'Blessing',
        belt:'Black',
        rate: 10000,
        thumb:"content/Images/Blessing.jpeg"
      }
    ];

    console.log(angular.toJson($scope.Ninjas));

}]);
