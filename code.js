document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.getElementById("slideshow");
    const videoOverlay = document.createElement("div");
    videoOverlay.id = "video-overlay";
    document.body.appendChild(videoOverlay);

    const videoCards = document.querySelectorAll(".video-card");
    let slideshowPaused = false;

    function pauseSlideshow() {
        slideshowPaused = true;
        slideshow.style.display = "none";
    }

    function resumeSlideshow() {
        if (slideshowPaused) {
            slideshowPaused = false;
            slideshow.style.display = "block";
            showNextImage(); // Újraindítjuk a slideshow-t
        }
    }

    videoCards.forEach((card, index) => {
        // Késleltetés hozzáadása az animációhoz
        card.style.animationDelay = `${index * 2}s`; // Minden kártya 2 másodperccel később indul

        card.addEventListener("click", () => {
            if (!card.classList.contains("paused")) {
                // Állítsuk meg az animációt az adott kártyán
                card.style.animationPlayState = "paused";
                card.classList.add("paused");

                // Hozzunk létre egy iframe-et a videóhoz
                const videoId = card.getAttribute("data-video");
                videoOverlay.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                videoOverlay.style.display = "block";

                // Állítsuk le a slideshow-t
                pauseSlideshow();
            } else {
                // Folytassuk az animációt az adott kártyán
                card.style.animationPlayState = "running";
                card.classList.remove("paused");

                // Tüntessük el a videót
                videoOverlay.style.display = "none";
                videoOverlay.innerHTML = "";

                // Folytassuk a slideshow-t
                resumeSlideshow();
            }
        });
    });

    // Slideshow vezérlése
    const images = [
        "Fenykepek\\R2__0030_Tablo-retouched.jpg",
        "Fenykepek\\R2__0108_Tablo-retouched.jpg",
        "Fenykepek\\R2__0148_Tablo-retouched.jpg",
        "Fenykepek\\R2__0151_Tablo-retouched.jpg",
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
        if (slideshowPaused) return;

        // Állítsuk be a következő képet
        slideshow.style.display = "block";
        slideshow.style.opacity = "0"; // Kezdetben átlátszó
        slideshow.innerHTML = `<img src="${images[currentIndex]}" alt="Slideshow Image">`;

        // Fokozatosan jelenjen meg
        setTimeout(() => {
            slideshow.style.opacity = "1";
        }, 100);

        // 3 másodperc múlva halványuljon el
        setTimeout(() => {
            slideshow.style.opacity = "0";
        }, 4000);

        // 4 másodperc múlva lépjünk a következő képre
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Következő kép indexe
            showNextImage();
        }, 6000);
    }

    // Indítsuk el a diavetítést
    showNextImage();
});
