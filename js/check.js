////判断电话
//function document.getElementById(id){
//	return document.getElementById(id);
//}
document.getElementById('phoneId').onblur=function(){
	var regPhone = /^1[3-57-9]\d{9}$/;  //一共十一位数，1开头，后面是十位数字
	var userphone = document.getElementById("phoneId").value.trim();
	var phone1 = document.getElementById("loginphone")
		if(userphone==""){
			phone1.innerHTML='输入的手机号不能为空!';
			phone1.style.display="block";
			userphone.style.border="1px solid red";	
		}else{
			if(!regPhone.test(userphone)){
				document.getElementById('loginphone').innerHTML='输入的手机号格式不正确';
				document.getElementById('loginphone').style.display='block';
				document.getElementById("phoneId").style.border="1px solid red";
			}else{
				document.getElementById('loginphone').innerHTML='';
				document.getElementById('loginphone').style.display='none';
				document.getElementById("phoneId").style.border="";
			}
		}
	}
document.getElementById('phoneId1').onblur=function(){
	var regPhone = /^1[3-57-9]\d{9}$/;  //一共十一位数，1开头，后面是十位数字
	var userphone = document.getElementById("phoneId1").value.trim();
		if(userphone==""){
			document.getElementById("newphone").style.display="block";
			document.getElementById("phoneId1").style.border="1px solid red";
			document.getElementById("newphone").innerHTML='输入的手机号不能为空!';
		}else{
			if(!regPhone.test(userphone)){
				document.getElementById('newphone').innerHTML='输入的手机号格式不正确';
				document.getElementById('newphone').style.display='block';
				document.getElementById("phoneId1").style.border="1px solid red";
			}else{
				document.getElementById('newphone').innerHTML='';
				document.getElementById('newphone').style.display='none';
				document.getElementById("phoneId1").style.border="";
			}
		}
	}
//判断密码
document.getElementById('mimaId').onblur=function(){
	var usermi = document.getElementById("mimaId").value;
	if(usermi==""){
			document.getElementById("loginmi").style.display="block";
			document.getElementById("mimaId").style.border="1px solid red";
	}else{
			document.getElementById("loginmi").style.display="";
			document.getElementById("mimaId").style.border="";
	}
}
document.getElementById('maId').onblur=function(){
	var userma = document.getElementById("maId").value;
	var checkma=document.getElementById('cheakMa').value;
		if(userma==""){
			document.getElementById("newma").style.display="block";
			document.getElementById("maId").style.border="1px solid red";
		}else{
			if(userma!=checkma){
				document.getElementById('newma').innerHTML='输入的验证码不正确';
				document.getElementById('newma').style.display='block';
				document.getElementById("maId").style.border="1px solid red";
			}else{
				document.getElementById('newma').innerHTML='';
				document.getElementById('newma').style.display='none';
				document.getElementById("maId").style.border="";
			}
		}
	}
//随机打印验证码
function getCheckMa(m){
	var str="";
	for(var i=0;i<m;i++){
		str = str+parseInt(Math.random()*10);
	}
	return str;
}
window.onload=function(){
		var Ma=getCheckMa(4);
		document.getElementById('cheakMa').value=Ma;
		document.getElementById('return').onclick=function(){
		var Ma=getCheckMa(4);
		document.getElementById('cheakMa').value=Ma;
	}
}
document.getElementById('phmaId').onblur=function(){
	var userphma = document.getElementById("phmaId").value;
	var Ma=document.getElementById('cheakMa').value
		if(userphma==""){
			document.getElementById("newphma").style.display="block";
			document.getElementById("phmaId").style.border="1px solid red";
		}else{
			document.getElementById("newphma").style.display="";
			document.getElementById("phmaId").style.border="";
		}

	}
document.getElementById('newmimaId').onblur=function(){
	var newmima = document.getElementById("newmimaId").value;
		if(newmima==""){
			document.getElementById("newmima").style.display="block";
			document.getElementById("newmimaId").style.border="1px solid red";
		}else{
			document.getElementById("newmima").style.display="";
			document.getElementById("newmimaId").style.border="";
		}
	}
document.getElementById('truemimaId').onblur=function(){
	var tmima = document.getElementById("truemimaId").value;
	var newmima = document.getElementById("newmimaId").value;
		if(tmima==""){
			document.getElementById("truemima").style.display="block";
			document.getElementById("truemimaId").style.border="1px solid red";
		}else{
			document.getElementById("truemima").style.display="";
			document.getElementById("truemimaId").style.border="";
		}
	}