$(document).ready(function(){
    
        importScripts();
        
       
    
})

function importScripts(){
    //获取盒子
   var box=$(".box");
   //因为宽都一样所以下标是谁都可以
   var boxWidth=box.eq(0).width();
   var num=Math.floor($(window).width()/boxWidth);
   var boxArr=[];
   box.each(function(index,value){
       var boxHeight=box.eq(index).height();
       if(index<num){
           boxArr[index]=boxHeight;
       }else{
           var boxMinHeight=Math.min.apply(null,boxArr);
           var boxMinIndex=$.inArray(boxMinHeight,boxArr);
           $(value).css({
               "position":"absolute",
               "top":boxMinHeight,
               "left":box.eq(boxMinIndex).position().left
           });
           boxArr[boxMinIndex]+=box.eq(index).height();
       }
   })
   
}
