var route=angular.module('route',['ngRoute']);
route.config(['$routeProvider',function($routeProvider){
     $routeProvider.when('/',{//访问首页时
         templateUrl:'a.html',
         controller:'aCtrl',
     }).when('/b',{
         templateUrl:'b.html',
         controller:'bCtrl',
     })
}])
route.controller('mainCtrl',['$scope',function($scope){
    // scope.cates=['首页','耳机','我的'];

}])
route.directive('lunbo',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'lunbo.html',
        scope:{
            sets:'=',
            interval:'=',
        },
        
        link:function (scope,el) {
            var w=$(el).outerwidth;
            var slide=$(el).find('.lunbo-inner');
            var index=0;
            if(!scope.interval){
                scope.interval=1000;
            }
           $(el).find('.lunbo-inner').width( w * scope.sets.length);
            setInterval(function(){
                slide.css({marginLeft:-w * index});
                index+=1;
                if(index===scope.sets.lenght){index=0;}
            },scope.interval)
        }
    }
}])
