const emailButton = document.querySelector("#email-button");
const contactFormBox = document.querySelector("#contact-form-box");
const contactForm = document.querySelector("#contact-form");

emailButton.addEventListener("click", () => {
    contactFormBox.classList.toggle("hidden");
})