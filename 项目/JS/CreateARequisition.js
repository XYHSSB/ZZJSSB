layui.use('laydate', function(){
    var laydate = layui.laydate;
    
    //执行一个laydate实例
    laydate.render({
      elem: '#test1' //指定元素
    });
  });

 $(()=>{
    

    function show(){

        var tbody=document.getElementById("tbody");
        var tr=tbody.getElementsByTagName("tr");
        for(var i=0;i<tr.length;i++){
            tr[i].onclick=function(ev){
                var e=ev||window.event;
                var target=e.target;
                switch(target.className){
                    case 'layui-btn':
                        tbody.removeChild(target.parentNode.parentNode);
                }
            }
        }

    }
    

    var xiXi = 0;

        $.ajax({
            'url': '../CreateARequisition.json',
            dataType: 'json',
            type: 'GET',
            async: false,
            success: function (list) {
                xiXi = list;
            }
        });

        for(var i=0;i<xiXi.subtotal.length;i++){
            tbody.innerHTML+=`<tr>
            <td>${xiXi.TheProductNumber[i]}</td>
            <td>${xiXi.TheProductName[i]}</td>
            <td>${xiXi.specification[i]}</td>
            <td>${xiXi.unit[i]}</td>
            <td>${xiXi.QuantityRequisitioned[i]}</td>
            <td>${xiXi.QuantityRequisitioned[i]}</td>
            <td>${xiXi.QuantityRequisitioned[i]}</td>
            <td>${xiXi.marketPrice[i]}</td>
            <td>${xiXi.subtotal[i]}</td>
            <td><button type="button" class="layui-btn">删除</button></td>
          </tr>
          `
          show();
        }

       
    for(var i=0;i<xiXi.spanName.length;i++){
        $(".span0").eq(i).html(`${xiXi.spanName[i]}`)
        $("i").html(`${xiXi.spanNamee[i]}`)
    }

    
    for(let j=0;j<xiXi.spanNameee.length;j++){
        $("label").eq([j]).html(`${xiXi.spanNameee[j]}`)
        console.log(xiXi.spanNameee[j]);
    }

console.log($(`.layui-input-block`).eq(0));

    for(let j=0;j<xiXi.input.length;j++){
        $(`.layui-input-block`).eq([j]).html(`<${xiXi.input[j]} type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input " id="user${j}">
        `)

    }

    $(`#btnn`).on("click",function(){
        layer.open({
            type:2,
            title:"更新供应商",
            content:`./xinjianshangpin.html`,
            area:["1400px","700px"],
            shade:0.3,
            anim:5,
            btn: ['确定'],
           
        })
    })
    })