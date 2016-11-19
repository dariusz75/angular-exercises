/* W celu uzycia routingu musimy poinformowac Angulara deklarujac ngRoute module w zaleznosciach modulu. */
var myApp = angular.module('myApp', ['ngRoute']);




/* Nastepnie musimy skonfigurowac aplikacje za pomoca metody config 
i okreslic trase komponentow za pomoca $routeProvider */
myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/first', {
		templateUrl: 'pages/template1.html',
		controller: 'firstController'
	})
	.when('/second', {
		templateUrl: 'pages/template2.html',
		controller: 'secondController'
	})
	.when('/third', {
		templateUrl: 'pages/template3.html',
		controller: 'thirdController'
	})
});

myApp.controller('mainController', ['$scope', function($scope) {	
	$scope.message = "This message comes from the Main Controller.";
}]);

myApp.controller('firstController', ['$scope', function($scope) {
	$scope.message = "This message comes from the First Controller.";
}]);

myApp.controller('secondController', ['$scope', function($scope) {
	$scope.message = "This message comes from the Second Controller.";
}]);

myApp.controller('thirdController', ['$scope', function($scope) {
	$scope.message = "This message comes from the Third Controller.";
}]);