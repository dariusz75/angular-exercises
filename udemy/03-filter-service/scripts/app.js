var myApp = angular.module("myModule", []);


myApp.controller('mainController', function($scope, $filter) {
	
	var firstname = 'John';
	var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	$scope.name = firstname;
	$scope.uppercasename = $filter('uppercase')(firstname);
	$scope.array = myArray;
	$scope.limitedArray = $filter('limitTo')(myArray, 3, 0);

});

/*
Powyzej widzimy przyklad uzycia wbudowanych filtrow - https://docs.angularjs.org/api/ng/filter


*/
