const loginForm = document.querySelector("#hidden");
const loginInput = document.querySelector(".loginInput")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event){
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem("username", username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.innerText = `Welcome ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);