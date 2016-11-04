var myApp = angular.module("myModule", []);

/*
Dyrektywami nazywamy instrukcje Angulara sluzace do manipulowania obiektem DOM, np. add ng-model.

W celu zastosowania two ways data binding uzyjemy wlasnie dyrektywu ng-model.

W tym celu, najpierw okreslimy zmienna ktora pobierze wartosc z pola input.
Nazwiemy ja messageGrabbed a nastepnie "wypuscimy na zewnatrz" przypisujac ja do obiektu $scope.

*/

myApp.controller('mainController', ['$scope', function($scope) {
	
	$scope.messageGrabbed = '';

}]);

/*
Nastepnie musimy zmodyfikowac nasz kod html
*/