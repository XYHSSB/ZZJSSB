//防止DOM阻塞
window.onload = function(){
	//应用按钮
	//复选框按钮
	var check = document.getElementsByClassName("check");
	//console.log(check);
	//合计
	var priceTotal = document.getElementById("priceTotal");
	//已选商品
	var selectedTotal = document.getElementById("selectedTotal");
	//tbody
	var tbody = document.getElementById("tbody");
	//tr行
	var tr = tbody.getElementsByTagName("tr");
	
	//遍历拿到所有的复选框
	for(var i =0;i<check.length;i++){
		check[i].onclick = function(){
			//check-all check 是全选按钮
			if(this.className =='check-all check'){
				for(var i=0;i<check.length;i++){
					check[i].checked = this.checked;
				}
			}
			gerTO();
		}
		
	}
	//
	
	
	
	
	//事件委托添加点击事件
	// 1.遍历每一行
	for(var i=0;i<tr.length;i++){
		tr[i].onclick = function(e){
			var e = window.event || e;
			var target = e.target||e.srcElement;
			//获取当前行第二个input
			var input1 = this.getElementsByTagName('input')[1];
			//用分支语句匹配事件源
			//哪个对象点位我就匹配哪个className
			switch(target.className){
				//如果点的是+
				case 'add':
				input1.value = parseInt(input1.value)+1;
				break;
				//如果点的是-
				case 'reduce':
				if(input1.value<=1){
					input1.value=1;
				}else{
					input1.value = parseInt(input1.value)-1;
				}
				break;
				//如果点的是删除的话
				case 'delete':
				tbody.removeChild(target.parentNode.parentNode);
				break;
			}
			gerTO();
		}
		
	}
	
	
	
	
	//计算总价
	function gerTO(){
		//拿到tbody
		var tbody = document.getElementById("tbody");
		//拿到tbody下面的所有tr
		var tr = tbody.getElementsByTagName('tr');
		//创建一个变量记录总价
		var price = 0;
		//创建一个变量获取已选商品
		var selscted = 0;
		
		//当我们选中每个复选框的时候，我们应该获取每行的单价和数量，计算后给
		//到小计，最后给到总价
		
		//遍历tr行
		for(var i=0;i<tr.length;i++){
			var input0 = tr[i].getElementsByTagName('input');
			//判断第一个input被选中时是不是true
			//为true就获取他的单价，数量，小计
			if(input0[0].checked){
				//获取单价
				var td2 = tr[i].getElementsByTagName('td')[2].innerText;
				console.log(td2);
				//获取数量
				var num = parseInt(input0[1].value);
				console.log(num);
				//获取小计
				var td4 = tr[i].getElementsByTagName('td')[4];
				
				//计算小计 小计=数量*单价
				td4.innerHTML = num*td2;
				//计算单价
				selected+=parseInt(input0[1].value);
				
			}
		}
	}
}