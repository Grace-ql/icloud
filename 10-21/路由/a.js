route.controller('aCtrl',['$scope Username userInfo User',function($scope,Username,userInfo,User){
    $scope.abbs=['adaf','adefwef','ddfdf'];
    $scope.imgs=['1.jpg','2.jpg'];
    User.getalluser().then(function(result){
        $scope.Users=result.data.data;
    })
}])