window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
