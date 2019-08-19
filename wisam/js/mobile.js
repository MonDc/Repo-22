
window.onload = function(){
			var getNavi = document.getElementById('menu');
			document.getElementById('mobile-navigation').onclick = function(){
				var a = getNavi.getAttribute('style');
				if(a){
					getNavi.removeAttribute('style');
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
				} else {
					getNavi.style.display='block';
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
				}
			};

		};
		/* slider code */
		var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className +="active";
}
