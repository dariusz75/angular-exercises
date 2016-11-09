var myApp = angular.module("myModule", []);

/*
Oto zalecany sposob wstrzykiwania zaleznosci.
stosuje sie go w celu unikniecia konfliktu podczas minifikacji kodu.

Zamiast 

myApp.controller('mainController', function($scope) {
	
	$scope.message = 'Test text!'

});

Nalezy zastosowac ponizsze rozwiazanie
*/

myApp.controller('mainController', ['$scope', function($scope) {
	
	$scope.message = 'Test text!'

}]);

/*
Po nazwie kontrolera nastepny parametr funkcji controller() podajemy w formie tablicy.
W tablicy musza sie znajdowac nazwy parametrow funkcji, podane przed funkcja jako stringi i w tej samej kolejnosci, 
czyli np.  ['$scope', '$log' function($scope, $log) { }]
*/
