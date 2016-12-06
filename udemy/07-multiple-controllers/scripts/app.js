var myApp = angular.module("myModule", []);

myApp.controller('firstController', ['$scope', function($scope) {
	
	$scope.message = 'This message comes from firstController';


}]);

myApp.controller('secondController', ['$scope', function($scope) {
	
	$scope.message = 'This message comes from secondController';


}]);