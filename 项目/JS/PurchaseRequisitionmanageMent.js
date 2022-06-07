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
      
      ,url: '../PurchaseOrderManagement.json' //数据接口
      ,page: true //开启分页
      ,cols: [[ //表头
         
        {field: 'InitiationDate', title: '发起日期', width:140, sort: true, fixed: 'left',edit:'text',}
        ,{field: 'PurchaseOrderNumber', title: '采购单编号', width:160,edit:'text'}
        ,{field: 'PurchaseOrderStatus', title: '采购单状态', width:120, sort: true,edit:'text'}
        ,{field: 'PleasePurchaseTheInitiator', title: '采购人姓名', width:100,edit:'text'}
        ,{field: 'RequisitionMnager', title: '请购负责人', width: 127,edit:'text'} 
        ,{field: 'PleasePurchaseAReviewer', title: '请购审核人', width: 120, sort: true,edit:'text'}
        ,{field: 'PleasePurchaseOrderRemarkse', title: '请购单备注', width: 120, sort: true,edit:'text'}
        ,{field: 'VendorName', title: '供应商名称', width: 120, sort: true,edit:'text'}
        ,{title:"操作",width:"204",align:"center",templet:function(d){
          var str="<button type='button' class='layui-btn layui-btn-xs layui-btn-danger' lay-event='del' id='del'>删除</button>";
          str+="<button type='button' class='layui-btn layui-btn-xs layui-btn-warm' lay-event='edit' id='test'>更新</button>";
          return str;
          }}
        ,{fleld:'aa',type:'checkbox'}
        
    ]],
    toolbar:"#toolbarDemo"
    });
    table.on('edit(text)',function(obj){
      console.log(obj);
      //修改狗的值
    var value=obj.value;
    //得到当前修改的tr对象
    var data=obj.data;
    //得到修改的字段名
    var field=obj.field
    
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
            title:"添加请购单",
            content:`./CreateARequisition.html`,
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
      }
});
  table.on('toolbar(test)',function(obj){
      console.log(obj);
      var checkStatus=table.checkStatus(obj.config.id);
      var eventName=obj.event;
      switch(eventName){
        case "getCheckLength":
          var arr=checkStatus.data;
          layer.msg(`选中了${arr.length}条记录`)
          break;
        case "isAll":
          var flag=checkStatus.isAll;
          var str=flag?"全选":"未全选"
          layer.msg(str)
          break;
      }

  })
});

$(()=>{
  $(`#btnns`).on("click",function(){
    layer.open({
      type:2,
      title:"添加请购单",
      content:`./CreateARequisition.html`,
      area:["1400px","700px"],
      shade:0.3,
      anim:5,
      btn: ['确定'],
      
  })
});


  })
