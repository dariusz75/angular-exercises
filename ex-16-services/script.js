

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {
												
												$scope.transformString = function (input) {
													
													if (!input) {
														return input;
													} 
														var output = '';


														for (var i = 0; i < input.length; i++) {
															if (i > 0 && input[i] === input[i].toUpperCase() ) {
																output = output + ' ';
															} 
																output = output + input[i];															
														}
														
												$scope.output = output;
												}
											});


/*
Aby utworzyc service w Angularze wystarczy utworzyc key o dowolnej nazwie (w naszym przypadku transformString) 
i przypisac go do obiektu $scope.

*/