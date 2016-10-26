 var reminder=angular.module('reminder',[]);
 reminder.controller('mainCtrl',['$scope',function($scope) {
     $scope.cates = [
         {id: 1001, theme: 'one', title:'新列表1', yuan:'b-tongxin',fontcolor:'color-1',quan:'b-quan',yuanleft:'b-tongxin',quanleft:'b-quan',bor:'active-b',borright:'active-1',
         todos:[
             {id:1,title:'aaaa',state:1},
             {id:2,title:'aa00aa',state:1},
             {id:3,title:'aaccaa',state:0},
             {id:4,title:'aacccaa',state:0},
         ]},
         {id: 1002, theme: "two",title: '新列表2',yuan:'g-tongxin',fontcolor:'color-2',quan:'g-quan',yuanleft:'g-tongxin',quanleft:'g-quan',bor:'active-g',borright:'active-2',
             todos:[
                 {id:1,title:'aaaa',state:1},
                 {id:2,title:'aa00aa',state:1},
                 {id:3,title:'aaccaa',state:0},
                 {id:4,title:'aacccaa',state:0},
             ]},
         {id: 1003, theme: "three", title: '新列表3',yuan:'y-tongxin',fontcolor:'color-3',quan:'y-quan',yuanleft:'y-tongxin',quanleft:'y-quan',bor:'active-y',borright:'active-3',
             todos:[
                 {id:1,title:'aaaa',state:1},
                 {id:2,title:'aa00aa',state:1},
                 {id:3,title:'aaccaa',state:0},
                 {id:4,title:'aacccaa',state:0},
             ]},
         {id: 1004, theme: 'four', title: '新列表4',yuan:'zong-tongxin',fontcolor:'color-4',quan:'z-quan',yuanleft:'zong-tongxin',quanleft:'z-quan',bor:'active-z',borright:'active-4',
             todos:[
             {id:1,title:'aaaa',state:1},
             {id:2,title:'aa00aa',state:1},
             {id:3,title:'aaccaa',state:0},
             {id:4,title:'aacccaa',state:0},
         ]},
         {id: 1005, theme: 'five', title: '新列表5',yuan:'r-tongxin',fontcolor:'color-5',quan:'r-quan',yuanleft:'r-tongxin',quanleft:'r-quan',bor:'active-r',borright:'active-5',
             todos:[
                 {id:1,title:'aaaa',state:1},
                 {id:2,title:'aa00aa',state:1},
                 {id:3,title:'aaccaa',state:0},
                 {id:4,title:'aacccaa',state:0},
             ]},
         {id: 1006, theme: 'six', title: '新列表6',yuan:'o-tongxin',fontcolor:'color-6',quan:'o-quan',yuanleft:'o-tongxin',quanleft:'o-quan',bor:'active-o',borright:'active-6',
             todos:[
                 {id:1,title:'aaaa',state:1},
                 {id:2,title:'aa00aa',state:1},
                 {id:3,title:'aaccaa',state:0},
                 {id:4,title:'aacccaa',state:0},
             ]},
         {id: 1007, theme: 'seven', title: '新列表7',yuan:'p-tongxin',fontcolor:'color-7',quan:'p-quan',yuanleft:'p-tongxin',quanleft:'p-quan',bor:'active-p',borright:'active-7',
             todos:[
                 {id:1,title:'aaaa',state:1},
                 {id:2,title:'aa00aa',state:1},
                 {id:3,title:'aaccaa',state:0},
                 {id:4,title:'aacccaa',state:0},
             ]},
     ];
     $scope.circle = [
         {id: 1001, theme: "one"},
         {id: 1002, theme: "two"},
         {id: 1003, theme: "three"},
         {id: 1004, theme: "four"},
         {id: 1005, theme: "five"},
         {id: 1006, theme: "six"},
         {id: 1007, theme: "seven"},
     ]
     $scope.colorsfont=['colors-1','colors-2','colors-3','colors-4','colors-5','colors-6','colors-7'];
     $scope.addcates=function(){
         // 找到id的最大值
         var colors=['one','two','three','four','five','six','seven'];
         var max_id=-Infinity;
         // alert(colors[$scope.cates.length%7])
         max_id=angular.forEach($scope.cates,function(v,i){
             if(max_id<v.id){
                 max_id=v.id;
             }
         })
         var id=parseInt(max_id)+1;
         var item=
             {id:id,
              theme:colors[$scope.cates.length%7],
              title:'新列表'+($scope.cates.length+1)+""}

         // console.log(item);
         $scope.cates.push(item);
         console.log($scope.cates)
     }
     $scope.current=$scope.cates[0];
     $scope.setcurrent=function (v) {
         $scope.current=v;
         $scope.colorsfont.forEach(function(v,i){
             $('.da-title,.option,.del,.del-all,.sub-message input,.cot.input-bg,.cot,.cot span').removeClass(v);
         })
         $scope.cates.forEach(function(v,i){
             // console.log(v);
             $('.tubiao').removeClass(v);
         })
     }
     $scope.delete=function(id){
         $scope.current.todos=$scope.current.todos.filter(function(v,i){
             return v.id !==id;
         })
         $('.message li').eq(id+1).addClass('donghua').delay(100).queue(function(){
             $(this).dequeue();
         })

     }
     $scope.addtodo=function(e){
         if(e.keyCode==13){
             var max_id=0;
             angular.forEach($scope.current.todos,function(v,i){
                 if(max_id<v.id){
                     max_id=v.id;
                 }
             })
             var item={
                 id:max_id+1,
                 title:$scope.item,
                 state:0,
             }
             // console.log($scope.item);
             // console.log($scope.current)
             $scope.current.todos.push(item);
             $scope.item='';
         }
     }
     $scope.colors=[
         {id:1,theme:'b-shiyuan'},
         {id:2,theme:'g-shiyuan'},
         {id:3,theme:'y-shiyuan'},
         {id:4,theme:'zong-shiyuan'},
         {id:5,theme:'r-shiyuan'},
         {id:6,theme:'o-shiyuan'},
         {id:7,theme:'p-shiyuan'}
     ];
     $scope.aa=function(index){
         $scope.cates.forEach(function (v,i) {
             $('.dange').removeClass(v.yuan);
             $('.dange').parent().addClass('.lis');
             $('.message .tubiao').removeClass(v.yuan);
             $('.sub-mes .tubiao').removeClass(v.quan);
             $('.da-title,.option,.del,.del-all,.sub-message input,.cot.input-bg,.cot,.cot span').removeClass(v.fontcolor)
             $('.sub-mes li').removeClass(v.bor);
         })
         $('.message .tubiao').addClass($scope.cates[index].yuan).removeClass($scope.cates[index].quan);
         $('.sub-mes .tubiao').addClass($scope.cates[index].quan).removeClass($scope.cates[index].yuan);
         $('.da-title,.option,.del,.del-all,.sub-message input,.cot.input-bg,.cot,.cot span').addClass($scope.cates[index].fontcolor);
         $('.sub-mes li').addClass($scope.cates[index].bor);
     }
     $scope.shanchu=function(id){
             $scope.cates = $scope.cates.filter(function (v, i) {
                 console.log(v.id)
                 return v.id !== id;
             })
             $scope.current.theme = $scope.circle[0].theme;
             $scope.current=$scope.cates[0];

     }
     $scope.huanquan=function(){
         $scope.cates.forEach(function(){
             alert(1)
             $('.tubiao').removeClass(v)
         })

     }
 }])
 reminder.directive('ngColorUl',[function(){
        return{
             restrict:'AE',
            // template: '<li data-id="{{cate.id}}"><div class="yuandian {{cate.theme}}"></div><span class="sub-content">{{cate.title}}</span><input type="text"value="hh" ng-model="cate.title"><div class="wife"></div> </li>',
            transclude:true,
            template: '<ul><div ng-transclude></div></ul>',
            replace:true,
            link:function(scope,el){
                // $(el).on('mousedown',false);
                // $(el).on('dblclick',function(){
                //     $(this).addClass('bianji');
                //     $(this).find('input').focus();
                //     var input=$(this).find('input');
                //     input.val(input.val()).focus;
                //     $(this).find('input').on('blur',function(){
                //         $(this).closest('li').removeClass('bianji');
                //         $('li').removeClass('hbg');
                //     })
                // })
                // $(el).on('click',function(){
                //     $('li').removeClass('hbg');
                //     $('wife').removeClass('wife-bg');
                //     $(this).addClass('hbg');
                //     $(this).find('wife').addClass('wife-bg');
                // })
                // $(el).on('mousedown',false);
                $(el).on('dblclick','li',function(){
                    $(this).addClass('bianji');
                    $(this).find('input').focus;
                    var input=$(this).find('input');
                        input.val(input.val()).focus;
                    $(this).find('input').on('blur',function(){
                        $(this).closest('li').removeClass('bianji');
                         $('li').removeClass('hbg');
                    })
                })
                $(el).on('click','li',function(){
                        $('li').removeClass('hbg');
                        $('.wife').removeClass('wife-bg');
                        $(this).addClass('hbg');
                        $(this).find('.wife').addClass('wife-bg');
                 })
                $(el).on('keyup',false);
                $(document).on('keyup',function(e){
                    if(e.keyCode===8){
                        var id=parseInt($(el).find('.hbg').attr('data-id'));
                        $(el).find('.hbg').remove();

                    scope.$apply(function(){
                        scope.cates=scope.cates.filter(function(v){
                          return v.id !== id;
                        })
                    })
                    }
                })
            }
        }
    }])
 reminder.directive('myOption',[function(){
    return{
        restrict:'AE',
        transclude:true,
        template:'<div class="lis"><div ng-transclude></div></div>',
        replace:true,
        link:function(scope,el){
            $('.option').on('click',function(){
                $('.option-yin').css('display','block');
            })
            $('.quxiao').on('click',function(){
                $('.option-yin').hide();
            })
            $('.finish').on('click',function(){
                $('.option-yin').hide();
            })
            $(el).find('.option-yin').on('click',false);
            
        }
    }
}])
 