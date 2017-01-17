angular
	.module('ngClassifieds', ['ngMaterial'])
	.config(function($mdThemingProvider) {

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');
	})
	.directive("helloWorld", function() {
		return {
			template: "<h2>Danger!!!</h2>"
		};
	});