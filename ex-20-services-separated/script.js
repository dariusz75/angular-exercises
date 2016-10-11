

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope, stringService) {
												
												$scope.putSpaces = function (input) {
														
													$scope.output = stringService.processString(input);

												}
											});

/*
Aby przypisac nasz serwis do kontrolera musimy podac jego nazwe w parametrze funkcji kontrolera zaraz po $scope.
W naszym przypadku jest to stringService.
Nastepnie przypisujemy scopowi funkcje do ktorej bedziemy sie odnosic z poziomu pliku html, w dyrektywie ng-click
i nadajemy jej dowolna nazwe, w naszym przypadku jest to putSpaces.
Nastepny krok, to przypisanie scopowi wartosci output ktora chcemy wyswietlic w oknie "Corrected Text",
nazwiemy ja output.
$scope.output referuje do naszego servisu stringService za pomoco ktorego referujemy do funkcji processString(input).

*/
