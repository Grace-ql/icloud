route.value('Username','me');
route.constant('userInfo',{name:'me',age:12,avatar:'http://...img'});
route.factory('User',['$http',function(){
    return{
        getalluser:function(){
            return $http.jsonp('http://myllianxiren0.duapp.com/getalluser?callback=JSON_COLLBACK');
        }
    }
}])