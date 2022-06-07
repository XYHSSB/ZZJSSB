$(()=>{
    var shangPin;
    $.ajax({
        'url': '../xinjianshangpin.json',
        dataType: 'json',
        type: 'GET',
        async: false,
        success: function (list) {
            shangPin = list;
        }
    });

    
    
let zhuTi=document.getElementById("zhuti")
let form=document.getElementById("form");

 for(let i=0;i<shangPin.inputName.length;i++){
   zhuTi.innerHTML+=`
   <div class="layui-form-item">
   <label class="layui-form-label">${shangPin.inputName[i]}</label>
   <div class="layui-input-block">
     <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
   </div>
 </div>
   
   `
 }

 
})