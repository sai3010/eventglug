function newwindow(){
	var show=document.getElementById("past");
	var hid=document.getElementById("up");
	show.style.position="absolute";
	show.style.visibility="visible";
	hid.style.visibility="hidden";
	$("#past").addClass("animated slideInleft");
	$("#navpast").addClass("active");
	$("#navup").removeClass("active");
	$('.button-collapse').sideNav('hide');
	}
	
