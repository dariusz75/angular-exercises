(function() {
	'ese strict';

	angular.module('ngClassifieds')
	.controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav) {

		classifiedsFactory.getClassifieds().then(function(classifieds){
			$scope.classifieds = classifieds.data
		});

		var contact = {
			name: 'Dariusz Franczak',
			phone: '07707636696',
			email: 'darius32@op.pl'
		}

		$scope.openSidebar = function() {
			$mdSidenav('left').open();
		}

		$scope.closeSidebar = function() {
			$mdSidenav('left').close();
		}

		$scope.saveClassified = function(classified) {
			$scope.classified.contact = contact;
			$scope.classifieds.push(classified);
			$scope.classified = {};
		}

	});
})();