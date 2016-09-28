

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope, stringService) {
												
												$scope.transformString = function (input) {
														
													$scope.output = stringService.processString(input);

												}
											});


/*
Do utworenia serwisu sluzy metoda factory().
Jako pierwszy parametr podajemy dowolna nazwe serwisu.
Drugi parametr to bezimienna funkcja.

factory('myService', function(){})

Funkcja ta ma za zadanie zwrocic nam obiekt javascript.
Pierwszy parametr funkcji to obiekt $scope.
Drugi to, w naszym przypadku, nazwa serwisu ktory chcemy wstrzyknac do kontrolera.

*/