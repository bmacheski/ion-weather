angular
	.module('ionweather.settings', [])
	.controller('SettingsCtrl', function($scope, settings){
		$scope.precision = settings.precision
		$scope.scale = settings.scale

		$scope.$watch('precision', function(){
			settings.precision = $scope.precision
		})

		$scope.$watch('scale', function(){
			settings.scale = $scope.scale
		})

	})

.factory('settings', function(){
		return {
			set scale(s){
				localStorage.setItem('scale', s)
			},
			get scale(){
				return localStorage.getItem('scale') || 'F'
			},
			set precision(p){
				localStorage.setItem('precision', p)
			},
			get precision() {
				return localStorage.getItem('precision') || '0'
			}
		}
	})
