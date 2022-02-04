

/*let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let user = document.getElementById("uname");
let userPassword = document.getElementById("password");*/

let id = (id) => document.getElementById(id);

let firstName = id("fname");
let lastName = id("lname");
let user = id("uname");
let userPassword = id("password");
let uForm = id("form");

let errorMsg = document.getElementsByClassName("error-message");

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	
	if(firstName.value.trim() === "") {
		errorMsg[0].style.visibility = "visible";
	} else {
		errorMsg[0].style.visibility = "hidden";
	}
	if(lastName.value.trim() === "") {
		errorMsg[1].style.visibility = "visible";
	} else {
		errorMsg[1].style.visibility = "hidden";
	}
	if(user.value.trim() === "") {
		errorMsg[2].style.visibility = "visible";
	} else {
		errorMsg[2].style.visibility = "hidden";
	}
	if(userPassword.value.trim() === "") {
		errorMsg[3].style.visibility = "visible";
	} else {
		errorMsg[3].style.visibility = "hidden";
	}
})