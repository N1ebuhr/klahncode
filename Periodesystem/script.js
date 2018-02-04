function openModal(s) {
    document.getElementById(s).style.display = "inline-block";
    document.getElementById("background").style.display = "block";
}
function closeModal(s) {
    document.getElementById(s).style.display = "none";
    document.getElementById("background").style.display = "none";
}
function popup(s){
	infoPopCl();
    var popup = document.getElementById(s);
    popup.classList.toggle("show");
}

function infoPop() {
	var x = document.getElementById("infoPopup");
	x.classList.toggle("show");
}

function infoPopCl() {
	if (document.getElementById("infoPopup").style.visibility = "show") {
		document.getElementById("infoPopup").style.visibility = "hidden";
	};
}

window.onload = infoPop;

$(document).keyup(function(){
	$("div.metalModal").css("display", "none");
	$("div.nonModal").css("display", "none");
	$("div.halfModal").css("display", "none");
	$("div.nobelModal").css("display", "none");
	$("div.infoModal").css("display", "none");
	document.getElementById("background").style.display = "none";
})