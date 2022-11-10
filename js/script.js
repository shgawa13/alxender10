const hamburgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll('.navigation-link');

let isNavigationActive = false;

hamburgerBtn.addEventListener("click", () => {
  if (isNavigationActive) {
    hamburgerBtn.classList.remove("active");
    navigation.classList.remove("active");
  } else {
    hamburgerBtn.classList.add("active");
    navigation.classList.add("active");
  }

  isNavigationActive = !isNavigationActive;
});

navigationLinks.forEach(el => {
  el.addEventListener("click", () => {
    hamburgerBtn.click();
  })
})