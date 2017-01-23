angular.module('devmtnTravel').controller('locationsController', function($scope, mainSrv){
$scope.locationData = mainSrv.travelInfo
})
