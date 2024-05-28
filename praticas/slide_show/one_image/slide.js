let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let index;

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; } 

    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }

    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }

    let newIndex = slideIndex - 1;

    slides[newIndex].style.display = "block";
    dots[newIndex].className += " active";
}

// let autoSlideIndex = 0;
// autoShowSlides();

// function autoShowSlides() {
//     let index;
//     let slides = document.getElementsByClassName("slide");

//     for (index = 0; index < slides.length; index++) {
//         slides[index].style.display = "none";
//     }

//     autoSlideIndex++;
//     if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }

//    let newIndex = autoSlideIndex - 1;

//     slides[newIndex].style.display = "block";
//     setTimeout(autoShowSlides, 3000); // Muda a imagem a cada 3 segundos
// }