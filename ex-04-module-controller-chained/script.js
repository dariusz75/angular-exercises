

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