(function(){
    
    function registerCtrl($scope,$state){
        
       $scope.user={};
        
        
        $scope.register=function(){
            
            $state.go("home",{
                      homedata:$scope.user
                      })
        };
        
        
    }
    angular.module("register").controller("registerCtrl",["$scope","$state",registerCtrl]);
    
    
    
    
    
})();

//(function() {
//  function registerCtrl($scope, $state) {
//    $scope.user = {};
//    $scope.register = function() {
//      $state.go("home", {
//        homedata: $scope.user
//      })
//    };
//  }
//  angular.module("register").controller("registerCtrl", ["$scope", "$state", registerCtrl]);
//})();
