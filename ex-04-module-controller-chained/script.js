/*
We can chain the module with the controller so instead of this:

var myApp = angular.module('myModule', []);

myApp.controller('registeredController', function ($scope) {
	
	var person = {
		firstName: 'John',
		surname: 'Smith',
		gender: 'male'
	};

	$scope.myPerson = person;
	$scope.firstMessage = 'Angular Tutorial - first message';
	$scope.secondMessage = 'Some text - second message';
	$scope.thirdMessage = 'End of Angular Tutorial - third message'


});

We can do this:

*/

var myApp = angular
						.module('myModule', [])
						.controller('registeredController', function ($scope) {
	
																									var person = {
																										firstName: 'John',
																										surname: 'Smith',
																										gender: 'male'
																									};

																									$scope.myPerson = person;
																									$scope.message = 'Angular Tutorial - using Chain method';
																									$scope.endMessage = 'The End of Angular Tutorial';

																								});