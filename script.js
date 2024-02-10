const mobileBtn = document.querySelector(".mobile-btn");

const closeBtn = document.querySelector(".close-btn");

const navItems = document.querySelector(".nav-list-items-mobile");

const mobileMenuOpen = () =>{
    navItems.classList.toggle("active-nav-menu")
}

mobileBtn.addEventListener('click', mobileMenuOpen);
closeBtn.addEventListener("click", mobileMenuOpen);