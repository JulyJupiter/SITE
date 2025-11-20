document.addEventListener("DOMContentLoaded", () => { 
    const profileImg = document.querySelector("#profile-img");
    const NameTag = document.querySelector ("#name");

    profileImg.addEventListener("mouseenter", () => {
        NameTag.style.opacity = 1;
    });
    profileImg.addEventListener("mouseleave", () => {
    NameTag.style.opacity = 0;

    const ImageAboutMe = document.querySelector("image-about-me");

    ImageAboutMe.addEventListener("click", () =>
    {
        ImageAboutMe.addClass = "bounce-animation";
        setTimeout(function() {
            ImageAboutMe.removeClass("bounce-animation");
        }, 500);
    }); 
});
});