var modalContent = ["black","green","blue","red"]
var modal = document.getElementById("modalContainer");
var modalInner = document.getElementById("modalContent");

function onModal(n){
	modal.style.display = "inline-block";
	modalInner.style.background = modalContent[n];
}

function offModal(){
	modal.style.display = "none";
}