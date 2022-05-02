var slides = document.getElementsByClassName("slides");
var ul = document.getElementById("ul");
var dots = ul.getElementsByTagName("li");
var total_slides = slides.length;
var i,index=0;

document.getElementById("next").addEventListener("click",function(){
	index +=1;
	GoSlides(index);
});

document.getElementById("prev").addEventListener("click",function(){
	index -=1;
	GoSlides(index);
});

function GoSlides(x){
	if(x>total_slides-1){
		index=0;
	}
	if(x<0){
		index=total_slides-1;
	}
	if(x<total_slides && x>=0){
		index=x;
	}

	for(i=0; i<total_slides; i++){
		slides[i].classList.remove("active");
		dots[i].classList.remove("active");
	}

		slides[index].classList.add("active");
		dots[index].classList.add("active");
}


console.log(total_slides);