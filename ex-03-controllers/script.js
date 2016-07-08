/// <reference path="angular.min.js" />

/*
Instead of creating model and controller separately we can do it in one go.
So instead of this.

var myController = function ($scope) {
	$scope.message = 'Angular Tutorial';
	$scope.endMessage = 'The End of Angular Tutorial'
}

myApp.controller('registeredController', myController);


We can do this

myApp.controller('registeredController', function ($scope) {
	$scope.message = 'Angular Tutorial Start';
	$scope.endMessage = 'The End of Angular Tutorial'
});
*/

var myApp = angular.module('myModule', []);

myApp.controller('registeredController', function ($scope) {
	
	var person = {
		firstName: 'John',
		surname: 'Smith',
		gender: 'male'
	};

	$scope.myPerson = person;
	$scope.message = 'Angular Tutorial Start';
	$scope.endMessage = 'The End of Angular Tutorial';


});