import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

new Swiper('.reviews', {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 1,

  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

const refs = {
  list: document.querySelector('.reviews-list'),
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const result = await getReviews();
    const markup = reviewsTemplate(result);
    refs.list.innerHTML = markup;
  } catch (error) {
    refs.list.innerHTML = `<p class="reviews-err">---Not found---</p>`;
    console.log(error);
  }
});

async function getReviews() {
  const baseURL = 'https://portfolio-js.b.goit.study/api/reviews';
  const result = await axios.get(baseURL);
  return result.data;
}

function reviewTemplate(item) {
  const { author, avatar_url, review } = item;

  return `<li class="reviews-item swiper-slide">
              <img
                class="reviews-img"
                src="${avatar_url}"
                alt="foto author"
              />
              <h2 class="reviews-name">${author}</h2>
              <p class="reviews-txt">${review}</p>
            </li>`;
}

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
}
