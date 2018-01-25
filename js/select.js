	//下拉
	$(document).ready(function(){
		$("#head1").bind("mouseenter",function () {
    			$('#select1').slideDown(50);
		});

		$("#head1").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select1').slideUp(20);
			},50);
		});

		$("#select1").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select1").mouseleave(function(){
			$('#select1').slideUp(300);
		})
		
		
		$("#head3").bind("mouseenter",function () {
    		$('#select2').slideDown(50);
		});

		$("#head3").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select2').slideUp(2);
			},50);
		});

		$("#select2").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select2").mouseleave(function(){
			$('#select2').slideUp(300);
		})
		
		
		$("#head5").bind("mouseenter",function () {
    		$('#select3').slideDown(50);
		});

		$("#head5").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select3').slideUp(2);
			},50);
		});

		$("#select3").bind("mouseenter",function () {
  		clearTimeout(iTimer);
		});	

		$("#select3").mouseleave(function(){
			$('#select3').slideUp(300);
		})


		$("#head6").bind("mouseenter",function () {
    		$('#select4').slideDown(50);
		});
		$("#head6").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select4').slideUp(2);
			},50);
		});
       $("#select4").bind("mouseenter",function () {
  		clearTimeout(iTimer);
		});	
		$("#select4").mouseleave(function(){
			$('#select4').slideUp(300);
		})
		
		
		$("#head7").bind("mouseenter",function () {
    		$('#select5').slideDown(50);
		});

		$("#head7").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select5').slideUp(2);
			},50);
		});

		$("#select5").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select5").mouseleave(function(){
			$('#select5').slideUp(300);
		})
		
		$("#head8").bind("mouseenter",function () {
    		$('#select6').slideDown(50);
		});

		$("#head8").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select6').slideUp(2);
			},50);
		});

		$("#select6").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select6").mouseleave(function(){
			$('#select6').slideUp(300);
		})
		
		$("#head9").bind("mouseenter",function () {
    		$('#select7').slideDown(50);
		});

		$("#head9").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select7').slideUp(2);
			},50);
		});

		$("#select7").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select7").mouseleave(function(){
			$('#select7').slideUp(300);
		})
		
		$("#head10").bind("mouseenter",function () {
    		$('#select8').slideDown(50);
		});

		$("#head10").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select8').slideUp(2);
			},50);
		});

		$("#select8").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select8").mouseleave(function(){
			$('#select8').slideUp(300);
		})
		
		$("#head11").bind("mouseenter",function () {
    		$('#select9').slideDown(50);
		});

		$("#head11").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select9').slideUp(2);
			},50);
		});

		$("#select9").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select9").mouseleave(function(){
			$('#select9').slideUp(300);
		})
				
		$("#head12").bind("mouseenter",function () {
    		$('#select10').slideDown(50);
		});

		$("#head12").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#select10').slideUp(2);
			},50);
		});

		$("#select10").bind("mouseenter",function () {
  			clearTimeout(iTimer);
		});	

		$("#select10").mouseleave(function(){
			$('#select10').slideUp(300);
		})
});
