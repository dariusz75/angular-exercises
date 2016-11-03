var myApp = angular.module("myModule", []);
/* 
myModule jest nazwa dowolna i jest to nazwa modulu angulara 
do ktorego bedziemy sie odwolywac po umieszczeniu ng-app="myModule" w tagu html.
*/

/*
Nastepnie tworzymy kontroler i deklarujemy go w Divie w ktorym chcemy miec dostep do jego funkcji
<div ng-controller="mainController"></div>
*/
myApp.controller('mainController', function($scope) {
	$scope.message = 'Hello World!';
	$scope.messages = {
		message1: 'This is message 1',
		message2: 'This is message 2',
		message3: 'This is message 3',
	};


});


/* 
Dependencies injection - wstrzykiwanie zaleznosci to inaczej 
deklarowanie obiektu jako parametru funkcji zamiast tworzenie go wewnatrz tej funkcji.
*/
