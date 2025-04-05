document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.main-visual', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
      }
    });
  });
  

  const images = ["img/kapu1.png", "img/kapu2.png"]; // ← 拡張子 .png を忘れずに！
  let currentIndex = 0;
  
  setInterval(() => {
    const img = document.getElementById("mascotImage");
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
  }, 2600);
  


  
  