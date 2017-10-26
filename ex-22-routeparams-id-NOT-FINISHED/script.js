var myApp = angular
						.module('myModule', ['ngRoute'])
						.config(function ($routeProvider) {
							$routeProvider
								.when('/home', {
									templateUrl: 'templates/home.html',
									controller: 'homeController'
								})
								.when('/courses', {
									templateUrl: 'templates/courses.html',
									controller: 'coursesController'
								})
								.when('/students', {
									templateUrl: 'templates/students.html',
									controller: 'studentsController'
								})
								.when('/students/:id', {
									templateUrl: 'templates/studentDetails.html',
									controller: 'studentDetailsController'
								})
								.otherwise({
									redirectTo: '/home'
								})
						})
						.controller('homeController', function($scope) {
							$scope.message = "Home Page";
						})
						.controller('coursesController', function($scope) {
							$scope.courses = ['HTML', 'CSS', 'JavaScript', 'PHP', 'iOS'];
						})
						.controller('studentsController', function($scope) {
							$scope.students = [
															{ id: 1, name: 'Ben', city: 'London', gender: 'Male'},
															{ id: 2, name: 'Bill', city: 'Moscow', gender: 'Male' },
															{ id: 3, name: 'Josh', city: 'Berlin', gender: 'Male' },
															{ id: 4, name: 'Andrew', city: 'Warsaw', gender: 'Male' },
															{ id: 5, name: 'John', city: 'Paris', gender: 'Male' }
															];
						})
						.controller('studentDetailsController', function($scope, $routeParams) {

						})

