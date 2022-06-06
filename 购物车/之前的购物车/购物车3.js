//1.全选/反选 功能 
//2.选中行商品可以直接计算小计
//3.选中行的商品会在底部精选商品件数和合计的计算

window.onload = function(){
	// var chack = document.getElementsByClassName('check');
	// console.log(check);
	//获取有check的所有元素
	var check = getClass("check");
	console.log(check);
	//var check_all = document.getElementById("check-all check")
	//console.log(check_all);
	//设置全选
	for(var i=0;i<check.length;i++){
		check[i].onclick = function(){
			if(this.classNane=="check-all"){
				for(var i = 0;i<check.length;i++){
					check[j].checked = this.checked;
				}
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
//获取类名的方法 用来兼容IE游览器
function getClass(cName){
	//获取页面所有节点
	var doms = document.getElementsByTagName('*');
	var domsArr = [];
	
	
	//遍历所有的标签 查看标签中的类名，有没有check，有就放到空数组里面
	for(var i=0;i<doms.length;i++){
		if(doms[i].className==cName||doms[i].className.indexOf(" "+cName)||doms[i].className.indexOf(cName+" ")){
			domsArr.push(doms[i]);
		}
	}
	return domsArr;
}



//计算总计的方法
function getTO(){
	var tbody  =document.getElementById('tbody');
	var tr = tbody.getElementsByTagName('tr');
	var price = 0;
	var select = 0;
	for(var i =0;i<tr.length;i++){
		var input = tr[i].getElementsByTagName('input');
		if(input[0].checked){
			var td2 = tr[i].getElementsByTagName('td')[2].innerHTML;
			var num = parseInt(input[1].value);
			var td4 = tr[i].getElementsByTagName('td')[4];
			td4.innerHTML = num*td2;
			select+=num;
			price+=parseInt(td4.innerHTML);
		}
	}
	
}