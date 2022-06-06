layui.use('element', function(){
    var element = layui.element;
    
    });
 
  layui.use('form', function(){
    var form = layui.form;
    
  });

  $(()=>{
    $("#btn").on("click",function(){
      layer.msg("保存成功");
})

var bibi = 0;

$.ajax({
    'url': '../Addavendor.json',
    dataType: 'json',
    type: 'GET',
    async: false,
    success: function (list) {
        bibi = list;
    }
});





for(var i =0;i<bibi.obj.length;i++){
  $(`#icon${i}`).html(`${bibi.obj[i]}`)
  $(`#span${i}`).html(`${bibi.headName[i]}`)
}

for(var j=0;j<bibi.inputName.length;j++){
  $(`label`).eq(j).html(`${bibi.inputName[j]}`)
}

var baba=$(`.layui-input-block`);
for(var g=0;g<bibi.input.length;g++){
  $(`.layui-input-block`).html(`<${bibi.input[i]} type="text" name="title" required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">`)
}

})



