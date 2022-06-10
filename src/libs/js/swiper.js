// First Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Second slider

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const burger = document.querySelector('.burger-wrapper')

const burger = document.querySelector('.burger-wrapper')
const burgerBorder = document.querySelector('.header-nav-center__burger')

burgerBorder.addEventListener('click', function () {
  // burger.style.display = 'none'
  burger.classList.toggle('active-burger')
})
