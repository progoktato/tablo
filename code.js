document.addEventListener("DOMContentLoaded", () => {
    const floatingIsland = document.querySelector(".floating-island");

    floatingIsland.addEventListener("click", () => {
        floatingIsland.classList.toggle("paused"); 
    });
});