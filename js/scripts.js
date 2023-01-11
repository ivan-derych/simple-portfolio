// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const burgerItem = document.querySelector(".menu__item-link");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });

  menu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav");

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);

// Events on Scroll
function scrollEvents() {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".menu__item-link");
  const menu = document.querySelector(".menu");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const linkHref = link.getAttribute("href").replace("#", "");
            if (linkHref === entry.target.id) {
              link.classList.add("active");
            } else if (linkHref !== entry.target.id) {
              link.classList.remove("active");
            }
          });
        }
        console.log(entry);
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__item-link")) {
      e.preventDefault();

      const sectionId = e.target.getAttribute("href").replace("#", "");

      window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        behavior: "smooth",
      });
    }
  });
}
scrollEvents();

