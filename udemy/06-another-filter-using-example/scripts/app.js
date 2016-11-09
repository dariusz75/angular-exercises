var myApp = angular.module("myModule", []);

/*
Ponizej mamy przyklad pokazujacy uzycie filtra lowercase.
Wtym celu jako pierwsza, utworzylismy zmienna o nazwie messageGrabbedToLowerCases
i przypisalismy ja do obiektu $scope.
Nastepnie calosci przypisalismy funkcje ktora zwraca przefiltrowana wartosc zmiennej 
messageGrabbed posiadajacej wartosc pobrana z okna input.
*/

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
	
	$scope.messageGrabbed = '';

	$scope.messageGrabbedToLowerCases = function() {
		return $filter('lowercase')($scope.messageGrabbed);
	}

}]);

/*
Nastepnie musimy zmodyfikowac nasz kod html
*/