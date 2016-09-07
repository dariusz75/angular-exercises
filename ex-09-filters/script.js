

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {
												
												var employees = [
													{
														name: 'Ben',
														dateOfBirth: new Date('November 23, 1999'), 
														gender: 'Male',
														salary: 22222,
													},
													{
														name: 'Bill',
														dateOfBirth: new Date('November 13, 1989'), 
														gender: 'Male',
														salary: 22222,
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('November 23, 1993'), 
														gender: 'Male',
														salary: 22222,
													},
													{
														name: 'Benny',
														dateOfBirth: new Date('November 13, 2000'), 
														gender: 'Male',
														salary: 22222,
													},
												];

										$scope.employees = employees;

											});

