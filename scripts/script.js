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
