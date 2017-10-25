

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {
												
																					var technologies = [
																						{
																							name: 'HTML5', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'CSS3', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'JavaScript', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'PHP', 
																							likes: 0, 
																							dislikes: 0
																						},

																					];

																					$scope.technologies = technologies;

																					$scope.incrementLikes = function (technology) {
																						technology.likes++
																					};

																					$scope.incrementDislikes = function (technology) {
																						technology.dislikes++
																					};								

																				});

