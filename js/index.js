//顶部悬浮
window.onscroll = function(){
		var div1 = document.getElementById("ns");
		var div2 = document.getElementById("Right");
		var div3=document.getElementById("ss");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(_scroll >= 100){
			div1.style.position = "fixed";
			div1.style.top = 0;
			div1.style.height='40px';
			div2.style.display='block';			
			document.getElementById("head1").style.height='40px';
			document.getElementById("head2").style.height='40px';
			document.getElementById("head3").style.height='40px';
			document.getElementById("head4").style.height='40px';
			document.getElementById("head5").style.height='40px';
			document.getElementById("head6").style.height='40px';
			document.getElementById("head7").style.height='40px';
			document.getElementById("head8").style.height='40px';
			document.getElementById("head9").style.height='40px';
			document.getElementById("head10").style.height='40px';
			document.getElementById("head11").style.height='40px';
			document.getElementById("head12").style.height='40px';
		} else{
			div1.style.height='30px';
			div1.style.position = "";
			div2.style.display='none'; 
			div2.style.lineHeight='';
			document.getElementById("head1").style.height='';
			document.getElementById("head2").style.height='';
			document.getElementById("head3").style.height='';
			document.getElementById("head4").style.height='';
			document.getElementById("head5").style.height='';
			document.getElementById("head6").style.height='';
			document.getElementById("head7").style.height='';
			document.getElementById("head8").style.height='';
			document.getElementById("head9").style.height='';
			document.getElementById("head10").style.height='';
			document.getElementById("head11").style.height='';
			document.getElementById("head12").style.height='';
		}
	}

//轮播图
var arr=["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner4.jpg"];
var ord=0;
var myTimer=null;
function initUI(){
	$('#box li:first').css('backgroundColor','red');
}
function initEvent(){
	$('#box').mouseenter(function(){
		stopChange();
	})
	$('#box').mouseleave(function(){
		autoChange();
	})
	$('#box li').click(function(){
		goChange($('#box li').index(this));
	})
	$('#leftArrow').click(function(){
		let transOrd=ord-1;
		transOrd=transOrd<0?arr.length-1:transOrd;
		goChange(transOrd);
	})
		$('#rightArrow').click(function(){
		let transOrd=ord+1;
		transOrd=transOrd>arr.length-1?0:transOrd;
		goChange(transOrd);
	})
}
//自动播放
function autoChange(){
	myTimer=setInterval(function(){
		//改变数据
		let outOrd=ord;
		ord++;
		if(ord>arr.length-1){
			ord=0;
		}
		//改变外观
		let $img=$('#box img');
		$img.eq(outOrd).animate({'opacity':0},300);
		$img.eq(ord).animate({'opacity':1},300);
		//改变豆豆的颜色
		  $("#box li").eq(ord).css({"backgroundColor":"red"}).siblings().css({"backgroundColor":"#fff"});
	},3000)
}
//停止播放
function stopChange(){
	window.clearInterval(myTimer);
}
//跳转到指定的图片
function goChange(transOrd){
		//改变数据
		let outOrd=ord;
		ord=transOrd;
		if(ord>arr.length-1){
			ord=0;
		}
		//改变外观
		let $img=$('#box img');
		$img.eq(outOrd).animate({'opacity':0},300);
		$img.eq(ord).animate({'opacity':1},300);
		//改变豆豆的颜色
		  $("#box li").eq(ord).css({"backgroundColor":"red"}).siblings().css({"backgroundColor":"#fff"});
}

$(function(){
	initUI();
	autoChange();
	initEvent();
})
//无缝滚动
window.onload = function(){
		let currLeft = -1800;
		let incLeft = 180;
		 document.getElementById("slide-right").onclick=function(){
			currLeft=currLeft+incLeft;
			//2、数据合法性的判断（边界）
			if(currLeft>=0){  //
				currLeft=-1620;
			}
			//3、改变外观
			$("#slide-subbox").animate({
				left:currLeft
			},500);
//			 document.getElementById("slide-subbox").style.left = currLeft+"px";
		}
		 document.getElementById("slide-left").onclick=function(){
			currLeft=currLeft-incLeft;
			//2、数据合法性的判断（边界）
			if(currLeft<=-1800){  //
				currLeft=0;
			}
			//3、改变外观		
//			 document.getElementById("slide-subbox").style.left = currLeft+"px";
		$("#slide-subbox").animate({
				left:currLeft
			},500);
		}
		 
}
	document.getElementById('cheak').onmouseover=function(){
		document.getElementById("img1").style.display="block";
	}
	document.getElementById('cheak').onmouseleave=function(){
		document.getElementById("img1").style.display="none";
	}
	document.getElementById('cheak1').onmouseover=function(){
		document.getElementById("img2").style.display="block";
	}
	document.getElementById('cheak1').onmouseleave=function(){
		document.getElementById("img2").style.display="none";
	}

