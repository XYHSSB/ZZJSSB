//防止DOM阻塞
window.onload = function(){
	//获取全选按钮
	var checkall = document.getElementById("check-all check");
	console.log(checkall);
	//获取单选按钮
	var checkone = document.getElementsByClassName("check-one check");
	// console.log(danxuan);
	
	//for循环遍历单选框
	
	
	
	checkall.onclick = function(){
		
		for(let i=0;i<checkone.length;i++){
			checkone[i].checked = checkall.checked;	
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}