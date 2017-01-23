angular.module('devmtnTravel').controller('packagesController', function($scope, mainSrv){
$scope.packageData = mainSrv.travelInfo
})
