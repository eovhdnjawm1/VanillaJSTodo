const images = ["0.jpg","1.jpg","2.jpg","3.jpg",]



function changeBackground() {
	const choseImage = images[Math.floor(Math.random() * images.length)];
	const background = document.querySelector("#main-container");

	background.style.background = `no-repeat url("../img/${choseImage}")`;
	background.style.backgroundSize = `cover`;
	console.log(choseImage);
}

changeBackground();