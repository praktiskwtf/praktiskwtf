angular.module('LasseWindApp', [])
   .controller('LasseImageController', function($scope, $http) {
       $scope.greeting = "PRAKTISK";
       $scope.contact = "+45 40945882 - info@praktisk.wtf";
       $http.get('Gallerier/data.json').success(function(data) {
   		$scope.jsonFileContent = data;

	});
});