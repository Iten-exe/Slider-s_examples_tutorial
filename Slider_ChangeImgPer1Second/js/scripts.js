var i = 0; // Start point
var images = [];
var time = 1000;

// Image List
images[0] = 'img/carousel1.jpg';
images[1] = 'img/carousel2.jpg';
images[2] = 'img/carousel3.jpg';
images[3] = 'img/carousel4.png';
images[4] = 'img/carousel5.png';

// Change Image
function changeImg() {
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

