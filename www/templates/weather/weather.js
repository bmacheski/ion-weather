angular
	.module('ionweather.weather', [])
	.controller('WeatherCtrl', function($scope, $stateParams, $http, settings){
		$scope.city = $stateParams.city;
		$scope.prec = settings.precision;
		$http
			.get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
			.success(function(data) {
				$scope.weather = data;
				console.log($scope.weather);
			  $scope.forecast = data.daily.data;
			})
	})


