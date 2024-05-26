const slides = document.querySelectorAll(".slider")
let counter = 0;


slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
);

const go_prev = () => {
    counter--;
    slideimage();
}

const go_next = () => {
    counter++;
    slideimage();
}

const slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}