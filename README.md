# Hospital
document.addEventListener("DOMContentLoaded", () => {
  // تفعيل القائمة الجانبية للأجهزة الصغيرة
  const toggleMenu = document.getElementById("toggle-menu");
  const mobileMenu = document.querySelector(".mobile-menu"); 

  toggleMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show"); // إضافة الكلاس "show" لإظهار أو إخفاء القائمة
  });

  // التحكم في شريط البحث
  const searchBar = document.querySelector(".search-input");
  const searchIcon = document.querySelector(".glass-icon");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show"); // إظهار أو إخفاء شريط البحث
  });

  // جعل القائمة العلوية ثابتة أثناء التمرير
  const header = document.getElementById("header");
  const headerTop = document.querySelector(".header-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 185) {
      header.classList.add("sticky");
      headerTop.classList.add("hidden");
    } else {
      header.classList.remove("sticky");
      headerTop.classList.remove("hidden");
    }
  });
});

// شريط البحث - التأكد من استخدام العناصر الصحيحة
const searchInput = document.querySelector(".search-input");
const searchButton = searchInput.querySelector("button");

searchButton.addEventListener("click", () => {
  const query = searchInput.querySelector("input").value.trim();
  if (query) {
    alert(`You searched for: ${query}`); // استبدل هذه العملية بعملية البحث الحقيقية
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".glass-icon");
  const searchBar = document.querySelector(".search-input");
  const searchInput = searchBar.querySelector("input");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show");
    searchInput.focus(); // التركيز على حقل البحث عند الفتح
  });
});
