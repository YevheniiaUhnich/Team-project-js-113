import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.querySelector('.custom-swiper-prev');
  const nextBtn = document.querySelector('.custom-swiper-next');
  const swiperContainer = document.querySelector('.projects-swiper');

  if (!swiperContainer || !prevBtn || !nextBtn) {
    return;
  }

  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    allowTouchMove: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    resistance: true,
    resistanceRatio: 0.5,
    speed: 300,
    loop: false,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        updateButtonState(this);
      },
      slideChange: function () {
        updateButtonState(this);
      },
    },
  });

  function updateButtonState(swiperInstance) {
    prevBtn.disabled = swiperInstance.isBeginning;
    nextBtn.disabled = swiperInstance.isEnd;

    prevBtn.classList.toggle('inactive', swiperInstance.isBeginning);
    nextBtn.classList.toggle('inactive', swiperInstance.isEnd);
  }

  prevBtn.addEventListener('click', () => swiper.slidePrev());
  nextBtn.addEventListener('click', () => swiper.slideNext());

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
      swiper.slideNext();
    }
  });
});
