$(document).ready(function(){
     $('.button-collapse').sideNav();
  });
function newwindow(){
	var show=document.getElementById("past");
	var hid=document.getElementById("up");
	show.style.position="absolute";
	show.style.visibility="visible";
	hid.style.visibility="hidden";
	show.addClass("animated rollIn");
}