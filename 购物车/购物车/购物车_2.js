

window.onload = function(){
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	//获取全选按钮
	var check_all = document.getElementById('check_all');
	//获取单选按钮
	var radio = document.getElementsByClassName('radio');
	
	//1.check_all点击事件
	check_all.onclick = function(){
		//遍历单选按钮的下标索引
		for(var i=0;i<radio.length;i++){
			radio[i].checked = check_all.checked;
		}
		set();
	}
	
	for(var i=0;i<radio.length;i++){
		radio[i].onclick = function(){
			var flag=true;
			for(var i=0;i<radio.length;i++){
				if(!radio[i].checked){
					flag=false;
					break;
				}
			}
			check_all.checked = flag;
		}
	}
	
	
	
	
	
	//2.点击加减号让input框里面的值发生变化，点击删除让内一行删除
	//获取减号
	var lose = document.getElementsByClassName('lose');
	//获取加号
	var add = document.getElementsByClassName('add');
	//获取tbody
	var tbody = document.getElementById('ta');
	//获取tr
	var tr = tbody.getElementsByTagName('tr');

	for(var i=0;i<tr.length;i++){
		tr[i].onclick = function(e){
			var e = window.event || e;
			var target = e.target||e.srcElement;
			var input1 = this.getElementsByTagName('input')[1];
			
			switch(target.className){
				//如果我们点击加号，我们就让input框里面的value值加1
				case 'add':
				input1.value = parseInt(input1.value)+1;
				break;
				//如果我们点击的是减号，我们就让input里面的value值减1;
				//当input框里面的值为1的时候，我们就让input里面的value值等于1
				case 'lose':
				if(input1.value<=1){
					input1.value=1;
				}else{
					input1.value= parseInt(input1.value)-1;
				}
				break;
				//当我点击删除的时候，我们就把内一行删除
				case 'delet':
				tbody.removeChild(target.parentNode.parentNode);
				break;
			}
			set()
		}
	}
	
	
	function set(){
		var xiaoji = 0;
		var zongji = 0;
		
		for(var i=0;i<tr.length;i++){
			//获取input框
			var input0 = tr[i].getElementsByTagName('input');
			//获取单价
			var danjia = tr[i].getElementsByTagName('td')[2].innerHTML;
			console.log(danjia)
			//获取数量
			var num = parseInt(input0[1].value);
			//获取小计
			var little = tr[i].getElementsByTagName('td')[4];
			
			//获取总价
			var zong = document.getElementById('zong');
			//console.log(zong)
			//获取已选
			var yi = document.getElementsByClassName('yi');
			//获取已选
			var yi = document.getElementById('yi');
			
			if(input0[0].checked){
				//计算小计
				little.innerHTML = num*danjia;
				//计算总价
				zongji = zongji+parseInt(tr[i].getElementsByTagName('td')[4].innerHTML);
				//计算已选商品
				xiaoji +=parseInt(input0[1].value);
			}else{
				zong.innerText=0;
			}
			zong.innerText = zongji;
			yi.innerHTML = xiaoji;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}