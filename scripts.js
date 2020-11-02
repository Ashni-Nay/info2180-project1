/* Add your JavaScript to this file */

window.onload=sendMsg;

function sendMsg(){
	var subbutt = document.getElementsByTagName("button")[0];
	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	subbutt.addEventListener("click", function(e){
		var email = document.getElementById("email").value;
		e.preventDefault();
		if(email.match(pattern)){
			document.getElementsByClassName("message")[0].innerHTML = (`Thank you! Your email address ${email} has been added to our mailing list!`);
		}
		else{
			document.getElementsByClassName("message")[0].innerHTML = ("Please enter a valid email address.");
		}
	});
}

