$(()=>{
    layui.use('element', function(){
        var element = layui.element;
});

layui.use('form', function(){
    var form = layui.form;
  });


  layui.use('laydate', function(){
    var laydate = layui.laydate;
    
    //执行一个laydate实例
    laydate.render({
      elem: '#test1' //指定元素
    });
  });
layui.use('table', function(){
    var table = layui.table;
    
    //第一个实例
    table.render({
      elem: '#demo'
      ,height: 500
      ,url: '../baga.json' //数据接口
      ,page: { //开启分页
        limit: 1, //每页数据条数
        curr: 1 //当前页数
       } //开启分页
      ,cols: [[ //表头
              {field: 'id', title: '序号', width:80, sort: true, fixed: 'left'}
              ,{field:'Vendor number',title:'供应商编号',width:100,sort:true,fixed:'left',edit:'text'}
              ,{field:'Vendor source',title:'供应商来源',width:150,sort:true,fixed:'left',edit:'text'}
              ,{field:'The name of the unit',title:'单位名称',width:200,sort:true,fixed:'left',edit:'text'}
              ,{field:'brand',title:'品牌',width:100,sort:true,fixed:'left',edit:'text'}
              ,{field:'Scope of business',title:'经营范围',width:200,sort:true,fixed:'left',edit:'text'}
              ,{field:'Responsible for introducing people',title:'负责引进人',width:100,sort:true,fixed:'left',edit:'text'}
              ,{field:'Date of filing',title:'建档日期',width:140,sort:true,fixed:'left',edit:'text'}
              ,{title:"操作",width:"214",align:"center",templet:function(d){
                     var str="<button type='button' class='layui-btn layui-btn-xs layui-btn-danger' lay-event='del' id='del'>删除</button>";
                     str+="<button type='button' class='layui-btn layui-btn-xs layui-btn-warm' lay-event='edit' id='test'>更新</button>";
                     return str;
                   }}
              
            ]],
     
    });

    

    table.on('edit(',function(obj){
        console.log(obj);
        //修改狗的值
      var value=obj.value;
      //得到当前修改的tr对象
      var data=obj.data;
      //得到修改的字段名
      var field=obj.field
      layer.msg(`[ID为:${data.id}]的${field}字段的值为${value}`)
    });
    table.on('edit(test)',function(obj){
        console.log(obj);
        //修改狗的值
      var value=obj.value;
      //得到当前修改的tr对象
      var data=obj.data;
      //得到修改的字段名
      var field=obj.field
      layer.msg(`[ID为:${data.id}]的${field}字段的值为${value}`)
    });

    table.on('tool(test)',function(obj){
        //的得到当前操作行的相关信息
        var tr=obj.data
        console.log(obj);
        var eventName=obj.event;
        if(eventName=='del'){
            //确认框
            layer.confirm(`您确认要删除吗`,{icon:3,title:"提示"},function(index){
                //shanchu
                obj.del();
                //关闭弹出
                layer.close(index)
            })
        }else if(eventName=='edit'){

            layer.open({
                type:2,
                title:"更新供应商",
                content:`./Addavendor.html`,
                area:["1400px","700px"],
                shade:0.3,
                anim:5,
                btn: ['确定'],
                end:function(){
                  console.log("更新层被关闭了....");
                  //只重载表格
                  table.reload("tId");
                }
            })
            // layer.prompt({
            //     //表单元素类型
            //     //0文本框
            //     //1.密码框
            //     //2.文本域
            //     formType:2,
            //     content:"http://www.baidu.com",
            //     value:tr.id
            // },function(value,index){
            //     obj.update({
            //         id:value
            //     })
            //     //关闭
            //     layer.close(index);
            // })

            
        }
    
    })
    
  });
  

var xiXi = 0;

        $.ajax({
            'url': '../card.json',
            dataType: 'json',
            type: 'GET',
            async: false,
            success: function (list) {
                xiXi = list;
            }
        });
        
        var crumbs=document.getElementById("crumbs")
        var baga=document.getElementById("baga")
    console.log(xiXi);
    for(var i=0;i<xiXi.HeaderContent.length;i++){
        crumbs.innerHTML+=`
        <a href="">${xiXi.HeaderContent[i]}/</a>
        `
    }

    
$("#btnadd").on("click",function(){
  layer.open({
    type:2,
    title:"添加供应商",
    content:`./Addavendor.html`,
    area:["1400px","700px"],
    shade:0.3,
    anim:5,
    btn: ['确定'],
    end:function(){
      console.log("更新层被关闭了....");
      //只重载表格
      table.reload("tId");
    }
})
})

    
 
})
    

  

 
    
  
   