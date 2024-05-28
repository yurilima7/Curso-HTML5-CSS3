let slideIndex = 1;

showSlides(slideIndex);

window.addEventListener('resize', () => {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let index;

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    let totalSlides = slides.length;
    let isWideScreen = window.innerWidth >= 768;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; } 

    for (index = 0; index < totalSlides; index++) {
        slides[index].style.display = "none";
    }

    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }

    let newIndex = slideIndex - 1;
    dots[newIndex].className += " active";

    if (isWideScreen) {
        slides[newIndex].style.display = "flex";
        slides[(newIndex + 1) % totalSlides].style.display = "flex";
    } else {
        slides[newIndex].style.display = "flex";
    }
}

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoShowSlides, 3000);
}

autoShowSlides();