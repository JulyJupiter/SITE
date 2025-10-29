document.addEventListener("DOMContentLoaded", () => { 
    const profileImg = document.querySelector("#profile-img");
    const NameTag = document.querySelector ("#name");

    profileImg.addEventListener("mouseenter", () => {
        NameTag.style.opacity = 1;
    });
    profileImg.addEventListener("mouseleave", () => {
    NameTag.style.opacity = 0;
});
});