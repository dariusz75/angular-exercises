var myApp = angular.module('myApp', ['ngRoute']);


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


/* 
#### Tworzenie Dyrektywu ####
Aby utworzyc dyrektyw nalezy uzyc funkcji directive().
Funkcja ta pobiera 2 parametry, pierwszy to nazwa dyrektywu a drugi to funkcja 
zwracajaca to co okreslimy w dyrektywie.
W naszym przykladzie jest to template, czyli fragment strony zapisany w html.
Nazwa dyrektywu musi byc zapisana w postaci camelCase.
*/

myApp.directive('textPanel', function() {
	return {
		restrict: 'E',
		template: '<h3>This h3 element is a template which comes from the textPanel directive.</h3>'
	}
});

myApp.directive('textPanel2', function() {
	return {
		restrict: 'A',
		template: '<h4>This h4 element is a template which comes from the textPanel2 directive.</h4>'
	}
});

myApp.directive('textPanel3', function() {
	return {
		restrict: 'C',
		template: '<h5>This h5 element is a template which comes from the textPanel3 directive.</h5>'
	}
});

myApp.directive('textPanel4', function() {
	return {
		restrict: 'EAC',
		template: '<h2>This h2 element is a template which comes from the textPanel4 directive.</h2>'
	}
});

/*
Nastepnie umieszczamy w kodzie html strony nasze dyrektywy.
Mozemy to zrobic na 3 rozne sposoby:

1. Jako element
<text-panel></text-panel>
2. Jako atrybut
<div text-panel></div>
3.Jako klase 
<div class="text-panel"></div>

Sposob w jaki to zrobimy mozemy zadeklarowac z zwracanym obiekcie dyrektywu, 
okreslajac wartosc wlasnosci restrict:

restrict: 'E', - metoda 1 - element
restrict: 'A', - metoda 1 - atrybut
restrict: 'C', - metoda 1 - klasa
restrict: 'EAC', wszystkie powyzsze metody

restrict: 'AE', - ustawienie domyslne
*/
