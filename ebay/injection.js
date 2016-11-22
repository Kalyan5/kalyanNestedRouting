(function(){
    
    angular.module("ebay",["header","home","register","login","loginDetails","ui.router"]);
    angular.module("ebay")
        .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
            
            
            var homeObject={
                
                templateUrl:"ebay/home/home.html",
                url:"/home",
                controller:"homeCtrl",
                params:{
                    homedata:""
                }
                
            }
            
            
                var registerObject={
                 
                    templateUrl:"ebay/register/register.html",
                    url:"/register",
                    controller:"registerCtrl"
                }
                
                var loginObject={
                    
                    templateUrl:"ebay/login/login.html",
                    url:"/login",
                    controller:"loginCtrl"
                
                }
                
                var loginDetailsObject={
                    
                    templateUrl:"ebay/loginDetails/loginDetails.html",
                    url:"/loginDetails"
                    //controller:"loginCtrl"
                
                }
                
                
            $stateProvider.state("home",homeObject);
            $stateProvider.state("register",registerObject);
            $stateProvider.state("login",loginObject);
            $stateProvider.state("loginDetails",loginDetailsObject);
            
       
            
        }]);
    
  
})();