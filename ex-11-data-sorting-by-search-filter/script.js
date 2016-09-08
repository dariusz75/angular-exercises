

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
														name: 'Bill',
														dateOfBirth: new Date('September 13, 1989'), 
														gender: 'Male',
														salary: 33333.76777,
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('June 23, 1993'), 
														gender: 'Male',
														salary: 44444.6666,
													},
													{
														name: 'Andrew',
														dateOfBirth: new Date('January 13, 2000'), 
														gender: 'Male',
														salary: 55555.099,
													},
													{
														name: 'John',
														dateOfBirth: new Date('March 13, 2000'), 
														gender: 'Male',
														salary: 66666.999,
													},
												];

										$scope.employees = employees;

											});

