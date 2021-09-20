const menu = document.querySelector(".header-menu");
const nav = document.querySelector(".header-nav");
const navItem = nav.querySelectorAll(".header-nav-link");

menu.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    nav.classList.remove("active");
  } else {
    menu.classList.add("active");
    nav.classList.add("active");
  }
});

navItem.forEach((item) => {
  item.addEventListener("click", (ev) => {
    const href = ev.target.getAttribute("href");
    ev.preventDefault();
    menu.classList.remove("active");
    nav.classList.remove("active");
    const hrefHTML = document.querySelector(href);
    const height = hrefHTML.getBoundingClientRect().top;
    document.body.style.top = height;
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  });
});
