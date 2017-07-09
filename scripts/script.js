// LIGHTBOX
function openLightbox(){
	document.getElementById('open-lightbox').style.opacity = "1";
	document.getElementById('open-lightbox').style["pointer-events"] = "auto";
}

function closeLightbox(){
	document.getElementById('open-lightbox').style.opacity = "0";
	document.getElementById('open-lightbox').style["pointer-events"] = "none";
}

// CONTACT LIGHTBOX
function openContact(){
	document.getElementById('contact').style.opacity = "1";
	document.getElementById('contact').style["pointer-events"] = "auto";
}

function closeContact(){
	document.getElementById('contact').style.opacity = "0";
	document.getElementById('contact').style["pointer-events"] = "none";
}

// CONTACT FORM FAKE

function openFakeThankYou(){
	document.getElementById('my-contact-form').style.display = "none";
	document.getElementById('fake-thank-you').style.display = "block";

}

// MOBILE HAMBURGER menubar

let hamburger = document.querySelector('.hamburger');
let ham1 = document.querySelector('.ham1');
let ham2 = document.querySelector('.ham2');
let ham3 = document.querySelector('.ham3');
let mobnav = document.querySelector('.mob-nav-menu');
let state = "closed";

// this function opens the hidden div with page links and adds animation styles to the three divs inside the hamburger menubar based on it being open or closed
function enambleHam(){
	if(state === "closed"){
		state = "open";
		ham1.style.animation = "ham1-open 0.3s forwards linear";
		ham2.style.animation = "ham2-open 0.3s forwards linear";
		ham3.style.animation = "ham3-open 0.3s forwards linear";
		mobnav.style["max-height"] = "300px";
		mobnav.style["margin-top"] = "40px";
	}
	else if(state === "open"){
		state = "closed";
		ham1.style.animation = "ham1-close 0.3s forwards linear";
		ham2.style.animation = "ham2-close 0.3s forwards linear";
		ham3.style.animation = "ham3-close 0.3s forwards linear";
		mobnav.style["max-height"] = "0";
		mobnav.style["margin-top"] = "0";
	}
}

hamburger.addEventListener('click', enambleHam);








