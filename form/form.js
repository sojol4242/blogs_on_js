// const form = document.querySelector("#form");
// const userName = document.querySelector("#userName");
// const btn = document.querySelector("#btn");
// const name = document.querySelector("#displayName");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (userName.value === "") {
//     console.log("%c Please select a user", "background: black;color:red,font-size:24px");
//   } else {
//     console.log(`%c ${userName.value}`, "background: blue;color:white,font-size:24px");
//     name.innerHTML = userName.value;
//   }
// });
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

form.addEventListener('submit', e => {
	e.preventDefault();
	// alert("Submitted");
	checkInputs();
});

const checkInputs = ()=>{
  const usernameValue=username.value.trim();
  const emailValue=email.value.trim();
  const passValue=password.value.trim();
  const passConfirmValue=passwordConfirm.value.trim();
  if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
  
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passValue === '') {
		setErrorFor(passValue, 'Password cannot be blank');
	} else {
		setSuccessFor(passValue);
	}
	
	if(passConfirmValue === '') {
		setErrorFor(passConfirmValue, 'This input cannot be blank');
	} else if(passValue !== passConfirmValue) {
		setErrorFor(passConfirmValue, 'Passwords does not match');
	} else{
		setSuccessFor(passConfirmValue);
	}

  if(passValue === '') {
		setErrorFor(passValue, 'Password cannot be blank');
	} else {
		setSuccessFor(passValue);
	}
	
	if(passConfirmValue === '') {
		setErrorFor(passConfirmValue, 'This input cannot be blank');
	} else if(passValue !== passConfirmValue) {
		setErrorFor(passConfirmValue, 'Passwords does not match');
	} else{
		setSuccessFor(passConfirmValue);
	}

}

const setErrorFor = (input,message) => {
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
const isEmail=(email) => {
 const regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
return regex;
}


// floating btn code :
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});