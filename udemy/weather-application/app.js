/* MODULE */
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

/* routes */
weatherApp.config(function ($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastCtrl'
	})
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastCtrl'
	})

});

/* services */
weatherApp.service('cityService', function() {

	this.city = 'New York, NY';

});



/* controllers */
weatherApp.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4c7b31de1420a31ef8d22efaab2b0161", 
	{ callback: "JSON_CALLBACK"}, { get: {method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

	$scope.convertToCelsius = function(kelvins) {

		return Math.round(kelvins - 273);

	}

	$scope.convertToDate = function(date) {

		return new Date(date * 1000);
	}

}]);