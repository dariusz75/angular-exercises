

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {
												
												var employees = [
													{
														name: 'Ben',
														dateOfBirth: new Date('November 23, 1999'), 
														gender: 'Male',
														salary: 22222.959696,
													},
													{
														name: 'Claire',
														dateOfBirth: new Date('November 13, 1989'), 
														gender: 'Female',
														salary: 33333.76777,
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('November 23, 1993'), 
														gender: 'Male',
														salary: 44444.6666,
													},
													{
														name: 'Benny',
														dateOfBirth: new Date('November 13, 2000'), 
														gender: 'Male',
														salary: 55555.099,
													},
													{
														name: 'John',
														dateOfBirth: new Date('November 23, 1999'), 
														gender: 'Male',
														salary: 66662.959696,
													},
													{
														name: 'Andrew',
														dateOfBirth: new Date('November 13, 1989'), 
														gender: 'Male',
														salary: 77777.76777,
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('November 23, 1993'), 
														gender: 'Male',
														salary: 88888.6666,
													},
													{
														name: 'Betty',
														dateOfBirth: new Date('November 13, 2000'), 
														gender: 'Female',
														salary: 99999.099,
													},
												];

										$scope.employees = employees;
										$scope.rowLimit = 2;

											});

