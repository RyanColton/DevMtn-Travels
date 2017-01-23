angular.module('devmtnTravel').controller('bookedController', function($scope, mainSrv, $stateParams){


for(var i = 0; i < mainSrv.travelInfo.length; i++){
 if(parseInt($stateParams.id) === mainSrv.travelInfo[i].id){
   $scope.bookedData = mainSrv.travelInfo[i]
 }
}

$scope.myStyle = {
  "background-image" : "url("+$scope.bookedData.image+")",
  
}
})
