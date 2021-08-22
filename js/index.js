const emailInput = document.getElementById("email");
const formControl = document.querySelector(".form-control");
const btnjoin = document.getElementById("btn-join-email");
const introText = document.querySelector(".intro-text");
const introImg = document.querySelectorAll(".intro-img img");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll("nav ul li");
const signIn = document.querySelector("nav .sign-in");

const regEx_email =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

btnjoin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!regEx_email.test(emailInput.value)) {
    formControl.classList.add("show");
    emailInput.style.border = "1px solid red";
  } else {
    formControl.classList.remove("show");
    emailInput.style.border = "1px solid lightgreen";
  }
});

const timeline = gsap.timeline();
timeline
  .from(introText, { autoAlpha: 0, y: -100, delay: 0.2 })
  .from(introImg, { autoAlpha: 0, y: -100, stagger: 0.3 }, "-=0.2")
  .from(logo, { autoAlpha: 0, y: -50 }, "-=0.2")
  .from(
    navLinks,
    { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
    "-=0.2"
  )
  .from(signIn, { autoAlpha: 0, y: -50, stagger: 0.1 }, "-=0.2");
