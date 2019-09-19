document.getElementsByClassName("close")[0].addEventListener("click", closeit);
document.getElementsByClassName("mobileMenuTrigger")[0].addEventListener("click", mobileMenuFunc);

var exit = document.getElementsByClassName("exit");
for(var j = 0; j < exit.length; j++) {
	exit[j].addEventListener("click", closeit);
}

function mobileMenuFunc() {
	var mobile = document.getElementById("mobilemenucontainer");
	mobile.style.display = "block";
	mobile.className = "menuSticky";
	document.body.style.overflow = "hidden";
	document.body.style.padding = "0";
	document.getElementsByClassName("mobileMenuTrigger")[0].style.display = "none";
}

function closeit() {
	var mobile = document.getElementById('mobilemenucontainer');
	var modal = document.getElementById("modal");

	if(mobile.style.display == "block" || modal.style.display == "block"){
		mobile.style.display = "none";
		//modal.style.display = "none";
	}else{
		mobile.style.display = "block";
		//modal.style.display = "block";
	}

	document.getElementsByClassName("mobileMenuTrigger")[0].style.display = "inline-block";
	document.body.style.overflow = "visible";
	document.body.style.padding = "0 5%";
}