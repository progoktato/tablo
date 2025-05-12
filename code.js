document.addEventListener("DOMContentLoaded", () => {

    const slideshow = document.getElementById("slideshow");
    const images = [
        "Fenykepek\\R2__0030_Tablo-retouched.jpg",
        "Fenykepek\\R2__0108_Tablo-retouched.jpg",
        "Fenykepek\\R2__0148_Tablo-retouched.jpg",
        "Fenykepek\\R2__015_Tablo-retouched.jpg",
        "Fenykepek\\R2__0235_Tablo-retouched.jpg",
        "Fenykepek\\R2__0256_Tablo-retouched.jpg",
        "Fenykepek\\R2__0270_Tablo-retouched.jpg",
        "Fenykepek\\R2__0313_Tablo-retouched.jpg",
        "Fenykepek\\R2__0344_Tablo-retouched.jpg",
        "Fenykepek\\R2__0378_Tablo-retouched.jpg",
        "Fenykepek\\R2__0429_Tablo-retouched.jpg",
        "Fenykepek\\R2__0475_Tablo-retouched.jpg",
        "Fenykepek\\R2__0504_Tablo-retouched.jpg",
        "Fenykepek\\R2__0543_Tablo-retouched.jpg",
        "Fenykepek\\R2__0589_Tablo-retouched.jpg",
        "Fenykepek\\R2__0621_Tablo-retouched.jpg",
        "Fenykepek\\R2__0662_Tablo-retouched.jpg",
        "Fenykepek\\R2__0686_Tablo-retouched.jpg",
        "Fenykepek\\R2__0751_Tablo-retouched.jpg",
        "Fenykepek\\R2__0767_Tablo-retouched.jpg",
        "Fenykepek\\R2__0807_Tablo-retouched.jpg",
        "Fenykepek\\R2__0854_Tablo-retouched.jpg",
        "Fenykepek\\R2__0971_Tablo-retouched.jpg",
        "Fenykepek\\R2__0995_Tablo-retouched.jpg",
        "Fenykepek\\R2__1058_Tablo-retouched.jpg",
        "Fenykepek\\R2__1125_Tablo-retouched.jpg",
        "Fenykepek\\R2__1204_Tablo-retouched.jpg",
        "Fenykepek\\R2__2623_Tablo-retouched.jpg",
        "Fenykepek\\R2__2646_Tablo-retouched.jpg"
    ]; // A képek elérési útjai
    let currentIndex = 0;

    function showNextImage() {
        // Állítsuk be a következő képet
        slideshow.style.display = "block";
        slideshow.style.opacity = "0"; // Kezdetben átlátszó
        slideshow.innerHTML = `<img src="${images[currentIndex]}" alt="Slideshow Image">`;

        // Fokozatosan jelenjen meg
        setTimeout(() => {
            slideshow.style.opacity = "1";
        }, 0);

        // 2 másodperc múlva halványuljon el
        setTimeout(() => {
            slideshow.style.opacity = "0";
        }, 4000);

        // 3 másodperc múlva lépjünk a következő képre
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Következő kép indexe
            showNextImage();
        }, 6000); // 6 másodperc a következő kép megjelenítéséhez
    }

    // Indítsuk el a diavetítést
    showNextImage();
});

document.addEventListener("DOMContentLoaded", () => {
    const videoCards = document.querySelectorAll(".video-card");

    videoCards.forEach((card, index) => {
        // Késleltetjük az animáció indítását
        card.style.animationDelay = `${index * 2}s`; // 2 másodperc késleltetés minden kártyánál
    });
});
