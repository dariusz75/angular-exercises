var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope, $location, $anchorScroll) {
												
												$scope.myScrollTo = function (myScrollLocation) {
													$location.hash(myScrollLocation);
													$anchorScroll();												
												};

											});

