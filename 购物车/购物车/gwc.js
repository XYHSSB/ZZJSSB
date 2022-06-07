

window.onload = function(){
	//小计功能
	//加减(小计)	
	
	//获取加减号
	var add = document.getElementsByClassName('add');
	var reduce = document.getElementsByClassName('reduce');
	
	
	//获取taody 
	var tbady = document.getElementById('ta')
	var tr = tbady.getElementsByTagName('tr');
	//遍历所有的tr行
	for(var i=0;i<tr.length;i++){
		tr[i].onclick = function(e){
			var e = window.event || e;
			var target = e.target||e.srcElement;
			//获取每一行第二个input框(数量框)
			var input1 = this.getElementsByTagName('input')[1];
			//console.log(input1);
			//用分支语句
			switch(target.className){
				//如果点击的是+号的话
				case 'add':
				input1.value = parseInt(input1.value)+1;
				break;
				//如果点击的-号的话
				case 'reduce':
				//需要一个判断，如果inpu1里面的值小于等于1时，让他等于1，其他时候--
				if(input1.value<=1){
					input1.value = 1;
				}else{
					input1.value= parseInt(input1.value)-1;
				}
				如果点击的是删除的话
				case 'delete':
				tbady.removeChild(target.parentNode.parentNode);
				break;
			}
			set();
		}
	}
	
	
	
	//计算小计和总计
	
	function set(){
		
		var zongjia=0;
		var yixuan = 0;
		//判断当我选中[i]的复选框的时候，我们就需要去拿到tr里面input里面的单价，数量，小计
		//1.先去遍历tr
		for(var i=0;i<tr.length;i++){
			//拿到第一个复选框
			var input0 = tr[i].getElementsByTagName('input');
			
			//拿到单价
			var danjia = tr[i].getElementsByTagName('td')[2].innerHTML;
			//拿到数量
			var num = parseInt(input0[1].value);
			//获取小计
			var little = tr[i].getElementsByTagName('td')[4];
			//计算总价
			var zong = document.getElementById('zong');
			//获取已选
			var yi = document.getElementById('yi')
			//现在就去判断当复选框选中的时候，拿到数量小计和单价
			if(input0[0].checked){
				//计算小计
				little.innerHTML = num*danjia;
				//计算总价
				zongjia += parseInt(tr[i].getElementsByTagName('td')[4].innerHTML);
				
				//已选商品
				var yi = document.getElementById('yi');
				//console.log('yi')
				yixuan += parseInt(input0[1].value);
				
			}
			zong.innerText = zongjia;
			yi.innerText = yixuan;
		}
	}
	
	
	//全选/反选
	//获取全选
	var check_all = document.getElementById('check_all');
	//获取反选
	var radio = document.getElementById('ta').getElementsByTagName('input');
	check_all.onclick = function(){
		for(var i=0;i<radio.length;i++){
			radio[i].checked = check_all.checked;	
		}
		set()
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}