(function(){
    
    function homeCtrl($scope,$state){
        
      console.log($state);  
        
    };
    
  angular.module("home").controller("homeCtrl",["$scope","$state",homeCtrl]);
    
    
    
})();