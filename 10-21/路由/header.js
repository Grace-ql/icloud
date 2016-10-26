route.directive('rHeader',[function () {
    return{
        restrict:'AE',
        transclude:true,
        templateUrl: 'header.html',
        scope:true,
        replace:true,
        controller:function($scope){
            $scope.cates=['首页','耳机','我的']
        },
        link:function(scope,el){

    }
        
    }
}])
