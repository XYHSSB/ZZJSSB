layui.use('laydate', function(){
    var laydate = layui.laydate;
    
    //执行一个laydate实例
    laydate.render({
      elem: '#test1' //指定元素
    });
  });


  layui.use('table', function(){
    var table = layui.table;

  table.render({
    elem: '#demo1'
    ,height: 612
    ,url: '../ReturnOrderManagement.json' //数据接口
    ,page: true //开启分页
    ,cols: [[ //表头
       {field: 'InitiationDate', title: '发起日期', width:110, sort: true, fixed: 'left',edit:'text'}
      ,{field: 'ReturnDate', title: '退货日期', width:110,edit:'text'}
      ,{field: 'TheReturnOrderNumber', title: '退货单号', width:150, sort: true,edit:'text'}
      ,{field: 'ReturnOrderStatus', title: '退货单状态', width:90,edit:'text'} 
      ,{field: 'VendorName', title: '发起人', width: 90,edit:'text'}
      ,{field: 'ReturnWarehouse', title: '退货仓库', width: 120, sort: true,edit:'text'}
      ,{field: 'ReturnMethod', title: '退货方式', width: 100, sort: true,edit:'text'}
      ,{field: 'VendorNameS', title: '供应商名称', width: 80, sort: true,edit:'text'}
      ,{field: 'aa',type:'checkbox',width: 80,edit:'text'}
      ,{title:"操作",width:"204",align:"center",templet:function(d){
        var str="<button type='button' class='layui-btn layui-btn-xs layui-btn-danger' lay-event='del' id='del'>审核</button>";
        str+="<button type='button' class='layui-btn layui-btn-xs layui-btn-warm' lay-event='edit' id='test'>更新</button>";
        return str;
        }}
     
      
      
    ]]
  });
  table.on('tool(test)',function(obj){
    var tr=obj.data
    var eventName=obj.event;
    if(eventName=='del'){
      layer.open({
        
          type:1,
          title:"审核退货单",
          content:`<div id="output_detail" class="pace-done" style="padding: 40px;  line-height: 5px;" >
          <br><br><input type="radio" name="sex" value="男" title="男">审核通过</label>
          <br><br> <input type="radio" name="sex" value="女" title="女" checked>审核未通过</label>
          </div>`,
          area:["220px","220px"],
          shade:0.3,
          anim:5,
          btn: ['确定'],})
        }else if(eventName=='edit'){
          layer.open({
        
            type:2,
            title:"更新退货单",
            content:`./CreateAReturn.html`,
            area:["600px","600px"],
            shade:0.3,
            anim:5,
            btn: ['确定'],})
        }
})

  })
