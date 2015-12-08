/**
* Main AngularJS Web Application
*/
angular.module('tomApp', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: "views/home.html"
				});
		}])
	.controller('MainCtrl',  
		function($scope, $http){
			$scope.cfg = null;

			$http.get('config.json')
				.success(function(data) {
					$scope.cfg = data;
					$http.get('theme/'+data.theme+'/config.json')
						.success(function(data) {
							$scope.cfg.theme = data;
						});
				})
				.error(function(data, status, headers, config) {
					console.log(data, status, headers, config)
				});
		});