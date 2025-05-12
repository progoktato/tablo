document.addEventListener("DOMContentLoaded", () => {
    const floatingIsland = document.querySelector(".floating-island");

    floatingIsland.addEventListener("click", () => {
        floatingIsland.classList.toggle("paused"); 
    });

    const modal = document.getElementById("video-modal");
    const modalContent = document.querySelector(".modal-content");
    const videoFrame = document.getElementById("video-frame");
    const closeBtn = document.querySelector(".close");
    const videoLinks = document.querySelectorAll(".video-link");

    videoLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const videoId = link.getAttribute("data-video");
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        videoFrame.src = ""; // Videó leállítása
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            videoFrame.src = ""; // Videó leállítása
        }
    });
});