// JavaScript for Background Slideshow
const backgrounds = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function changeBackground() {
    document.getElementById("bg-slideshow").style.backgroundImage = `url(${backgrounds[index]})`;
    index = (index + 1) % backgrounds.length;
}

setInterval(changeBackground, 2000); // Change background every 2 seconds
changeBackground(); // Initial call
