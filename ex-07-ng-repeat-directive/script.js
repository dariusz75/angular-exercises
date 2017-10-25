

var myApp = angular
						.module('myModule', [])
						.controller('myController', function ($scope) {

																					var employees = [ 
																														{ firstName: 'Ben', lastName: 'Hastings', gender: 'Male',salary: 5500 },
																														{ firstName: 'John', lastName: 'Smith', gender: 'Male', salary: 6500 },
																														{ firstName: 'Ana', lastName: 'Tylor', gender: 'Female', salary: 7500 },
																														{ firstName: 'Josh', lastName: 'Maker', gender: 'Male', salary: 8500 },
																														{ firstName: 'Sofia', lastName: 'Cool', gender: 'Female', salary: 9500 },
																													];

																					var countries = [
																														{
																															name: 'UK',
																															cities: [
																																				{name: 'London'},
																																				{name: 'Bristol'},
																																				{name: 'Leeds'},
																																			]
																														},
																														{
																															name: 'Poland',
																															cities: [
																																				{name: 'Warsaw'},
																																				{name: 'Krakow'},
																																				{name: 'Poznan'},
																																			]
																														},
																														{
																															name: 'Germany',
																															cities: [
																																				{name: 'Berlin'},
																																				{name: 'Hamburgh'},
																																				{name: 'Frankfurt'},
																																			]
																														},
																													];

																							var countries = [
																														{
																															name: 'UK',
																															cities: [
																																				{name: 'London'},
																																				{name: 'Bristol'},
																																				{name: 'Leeds'},
																																			]
																														},
																														{
																															name: 'Poland',
																															cities: [
																																				{name: 'Warsaw'},
																																				{name: 'Krakow'},
																																				{name: 'Poznan'},
																																			]
																														},
																														{
																															name: 'Germany',
																															cities: [
																																				{name: 'Berlin'},
																																				{name: 'Hamburgh'},
																																				{name: 'Frankfurt'},
																																			]
																														},
																													];


																					$scope.employees = employees;
																					$scope.countries = countries;

											});