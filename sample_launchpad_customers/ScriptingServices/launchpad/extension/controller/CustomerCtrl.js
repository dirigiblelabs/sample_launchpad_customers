/*globals controllers */
/*eslint-env browser */

controllers.controller('CustomerCtrl', ['$scope', '$http',
	function($scope, $http) {
		const API_CUSTOMERS = 'http://northwind.servicestack.net/customers.json';
		$http.get(API_CUSTOMERS).success(function(data) {
			$scope.customers = data.Customers;
		});
	}
]);
