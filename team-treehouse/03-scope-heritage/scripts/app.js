angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		alert('This is helloWorld controller function!');
	}
});