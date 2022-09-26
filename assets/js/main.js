
const forForm=document.getElementById("formId");
const forConfirm=document.getElementById("forconfirmId");
const inputOutput=document.getElementById("email");
const email_output=document.getElementById("email_output");

function subscribe(){
	// console.log(inputOutput.value.indexOf('@'));
if(inputOutput.value.indexOf('@')>0){
	forForm.style.visibility="hidden"
	forConfirm.style.visibility="visible"
	email_output.innerHTML=inputOutput.value
}else{
	alert('Please enter email')
}	
}