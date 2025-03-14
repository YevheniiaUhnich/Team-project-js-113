// (() => {
//   const refs = {
//     openModalBtn1: document.querySelector('[data-menu-open]'),
//     closeModalBtn1: document.querySelector('[data-menu-close]'),
//     modal: document.querySelector('[data-menu]'),
//   };
//   console.log(refs.closeModalBtn);

//   refs.openModalBtn1.addEventListener('click', toggleModal);
//   refs.closeModalBtn1.addEventListener('click', toggleModal);

//   function toggleModal() {
//     console.log(refs.modal);

//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle('is-open');
//   }
// })();

const menu = document.querySelector('.menu__boby');
const menuBtn = document.querySelector('.menu__icon');
const btnClose = document.querySelector('.menu-close');

const boby = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    menuBtn.classList.toggle('active');
    boby.classList.toggle('lock');
  });

  menu.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuBtn.classList.remove('active');
      boby.classList.remove('lock');
    });
  });
}

if (btnClose) {
  btnClose.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuBtn.classList.remove('active');
    boby.classList.remove('lock');
  });
}
