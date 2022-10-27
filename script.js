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
		genderImg.src = e.target.value + ".png";
		console.log(genderImg.src);
	});
}
window.addEventListener("load", formInput);
window.addEventListener("change", genderChange);
