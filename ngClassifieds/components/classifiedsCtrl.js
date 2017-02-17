(function() {
	'ese strict';

	angular.module('ngClassifieds')
	.controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog, $mdSelect) {

		classifiedsFactory.getClassifieds().then(function(classifieds){
			$scope.classifieds = classifieds.data
		});

		var contact = {
			name: 'Dariusz Franczak',
			phone: '07707636696',
			email: 'darius32@op.pl'
		}

		$scope.categories = getCategories($classifieds);

		$scope.openSidebar = function() {
			$mdSidenav('left').open();
		}

		$scope.closeSidebar = function() {
			$mdSidenav('left').close();
		}

		$scope.saveClassified = function(classified) {
			if (classified) {
				classified.contact = contact;
				$scope.classifieds.push(classified);
				$scope.classified = {};
				$scope.closeSidebar();
				$mdToast.show(
					$mdToast.simple()
						.content('New record saved')
						.position('top, right')
						.hideDelay(3000)
					);
			}
		}

		$scope.editClassified = function(classifiedForEditing) {
			$scope.editing = true;
			$scope.openSidebar();
			$scope.classified = classifiedForEditing;

		}

		$scope.deleteClassified = function(event, classified) {
			var confirm = $mdDialog.confirm()
															.title('Are you sure you want to delete ' + classified.title + '?')
															.ok('Yes')
															.cancel('Cancel')
															.targetEvent(event);

			$mdDialog.show(confirm).then(function() {
				var index = $scope.classifieds.indexOf(classified);
				$scope.classifieds.splice(index, 1);
			});

			
		}

		$scope.saveEdit = function() {
			$scope.editing = false;
			$scope.classified = {};
			$scope.closeSidebar();
			$mdToast.show(
					$mdToast.simple()
						.content('Edited record saved')
						.position('top, right')
						.hideDelay(3000)
					);
		}

		function getCategories(classifieds) {

			var categories = [];

			angular.forEach(classifieds, function(item) {
				angular.forEach(item.categories, function(category) {
					categories.push(category);
				});
			});

			return _.uniq(categories);

		}

	});
})();