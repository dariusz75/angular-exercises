var myApp = angular.module("myModule", []);

/*
Ponizej mamy przyklad pokazujacy uzycie filtra lowercase.
Wtym celu jako pierwsza, utworzylismy zmienna o nazwie messageGrabbedToLowerCases
i przypisalismy ja do obiektu $scope.
Nastepnie calosci przypisalismy funkcje ktora zwraca przefiltrowana wartosc zmiennej 
messageGrabbed posiadajacej wartosc pobrana z okna input.
*/

myApp.controller('mainController', ['$scope', function($scope) {
	
	$scope.firstValueGrabbed = '';
	$scope.secondValueGrabbed = '';

	$scope.score1 = function() {
		return parseInt($scope.firstValueGrabbed)+parseInt($scope.secondValueGrabbed);
	}

	$scope.score2 = function() {
		return parseInt($scope.firstValueGrabbed)*parseInt($scope.secondValueGrabbed);
	}

}]);

/*
Nastepnie musimy zmodyfikowac nasz kod html
*/