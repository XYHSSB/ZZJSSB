



window.onload = function(){
	//设置全选反选
	//获取按钮
	var check_all = document.getElementById('check_all');
	var check = document.getElementsByClassName('check');
	//遍历单选按钮
	check_all.onclick = function(){
		for(var i=0;i<check.length;i++){
				check[i].checked = check_all.checked;
		}
	}
	
	//当单选按钮有一个没选中，全选按钮不选中
	for(var i=0;i<check.length;i++){
		check[i].onclick = function(){
			var flag = true;
			for(var i = 0;i<check.length;i++){
				if(!check[i].checked){
					flag= false;
					break;
				}
			}
			check_all.checked = flag;
		}
		
	}
	
	
	
	//获取tbody
	var tbody = document.getElementById('tbody');
	//获取加号
	var add= document.getElementsByClassName('lose');
	//获取减号
	var lose= document.getElementsByClassName('add');
	//获取tr行
	var tr = tbody.getElementsByTagName('tr');
	//获取删除
	var delet = document.getElementsByClassName('delet');
	
	//操作加减删除
	
		//因为我们要操作每一行的按钮，所以我们要遍历tr行
		
		//事件委托
		for(var i=0;i<tr.length;i++){
			tr[i].onclick = function(e){
				//兼容IE游览器没有event，所以要兼容一下
				var e = e||window.event;
				var target = e.target||src.Element;
				//因为我们要让第二个input框 所以我们要获取一下
				var input1 = this.getElementsByTagName('input')[1];
				//然后去判断
				switch(target.className){
					case 'add':
					input1.value = parseInt(input1.value)+1;
					break;
					case 'lose':
					if(input1.value<=1){
						input1.value=1;
					}else{
						input1.value = parseInt(input1.value)-1;
						break;
					}
					case 'delet':
					tbody.removeChild(target.parentNode.parentNode);
					break;
				}
				set()
			}
		
		
		
		//选中单选框让那一行的小计添加到总计还有数量给到已选商品 计算小计
		function set(){
			var zong1 = 0;
			var yi = 0;
			for(var i=0;i<tr.length;i++){
				//获取input框
				var input0 = tr[i].getElementsByTagName('input');
				//获取单价
				
				//获取总价
				var zong = document.getElementById('zong');
				//获取已选
				var yi = document.getElementById('yi');
				
				//判断
				if(input0[0].checked){
					var num = tr[i].getElementsByTagName('td')[2].innerText;
					//获取数量
					var shu = parseInt(input0[1].value);
					//获取小计
					var little = tr[i].getElementsByTagName('td')[4];
					console.log(little)
					//计算小计
					little.innerHTML = num*shu;
					//计算总价
					zong1+=parseInt(tr[i].getElementsByTagName('td')[4].innerText)
				}
				zong.innerText = zong1;
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}