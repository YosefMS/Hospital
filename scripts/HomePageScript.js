document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.querySelector(".toggle-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  toggleMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show"); // إضافة الكلاس show لإظهار أو إخفاء القائمة
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-input");
  const searchIcon = document.querySelectorAll(".glass-icon");

  searchIcon.forEach((el) =>
    el.addEventListener("click", () => {
      search.classList.toggle("show");
    })
  );
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const headerTop = document.querySelector(".header-top");

  if (window.scrollY > 185) {
    header.classList.add("sticky");
    headerTop.classList.add("hidden");
  } else {
    header.classList.remove("sticky");
    headerTop.classList.remove("hidden");
  }
});

// search bar////////////////////////////////////////////////////////////////
