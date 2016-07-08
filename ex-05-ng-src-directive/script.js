

var myApp = angular
						.module('myModule', [])
						.controller('registeredController', function ($scope) {
	
																									var country = {
																										countryName: 'United Kingdom',
																										capital: 'London',
																										flag: './img/GB.png'
																									};

																									$scope.country = country;
																									$scope.message = 'Angular Tutorial - using Chain method';
																									$scope.endMessage = 'The End of Angular Tutorial';

																								});