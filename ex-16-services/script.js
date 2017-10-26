

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {
												
																					$scope.transformString = function (input) {
																																		
																																		var output = '';

																																		if (!input) {
																																			return input;
																																		} 

																																		for (var i = 0; i < input.length; i++) {
																																			if (i > 0 && input[i] === input[i].toUpperCase()) {
																																				output = output + ' ';
																																			} 
																																				output = output + input[i];															
																																		}
																																			
																																		$scope.output = output;
																																		
																									}
																							});


