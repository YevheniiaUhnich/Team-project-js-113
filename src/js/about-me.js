import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const swiper = new Swiper('.about-skills-swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  loop: true,

  modules: [Navigation, Autoplay],

  navigation: {
    nextEl: '.about-skills-btn',
  },

  autoplay: {
    delay: 2000,
  },

  keyboard: {
    enabled: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    swiper.slideNext();
  } else if (e.key === 'ArrowLeft') {
    swiper.slidePrev();
  }
});

new Accordion('.about-info', {
  duration: 500,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'about-info-item',
  triggerClass: 'about-info-btn',
  panelClass: 'about-info-content',
  activeClass: 'is-active',
});
