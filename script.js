function formInput() {
	let username = document.getElementById("username");
	let characterName = document.getElementById("character-name");
	username.addEventListener("input", (event) => {
		characterName.textContent = event.target.value;
	});
}

function genderChange() {
	let genderFormSelector = document.getElementById("gender");
	let genderImg = document.getElementById("gender-img");
	genderFormSelector.addEventListener("change", (e) => {
		genderImg.src =
			"../create-your-character-javascript-starter/media/gender/" +
			e.target.value +
			".png";
		console.log(genderImg.src);
	});
}

function raceChange() {
	let genderFormSelector = document.getElementById("race");
	let genderImg = document.getElementById("race-img");
	genderFormSelector.addEventListener("change", (e) => {
		genderImg.src =
			"../create-your-character-javascript-starter/media/race/" +
			e.target.value +
			".png";
		console.log(genderImg.src);
	});
}

function classChange() {
	let genderFormSelector = document.getElementById("class");
	let genderImg = document.getElementById("class-img");
	genderFormSelector.addEventListener("change", (e) => {
		genderImg.src =
			"../create-your-character-javascript-starter/media/class/" +
			e.target.value +
			".png";
		console.log(genderImg.src);
	});
}

window.addEventListener("load", formInput);
window.addEventListener("change", genderChange);
window.addEventListener("change", raceChange);
window.addEventListener("change", classChange);
