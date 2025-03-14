document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton');
  const links = document.getElementById('links');
  const navLinks = document.querySelectorAll('.scroll-link');

  if (button && links) {
    button.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (links) {
          links.classList.remove('open');
        }
      });
    });
  }

  // ------------------- Menu ----------------

  const openMenuBtn = document.getElementById('openMenuBtn');
  const menu = document.getElementById('menu');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const menuLinks = document.querySelectorAll('.menu-link');
  const orderProjectBtn = document.getElementById('orderProjectBtn');

  if (openMenuBtn && menu) {
    openMenuBtn.addEventListener('click', () => {
      menu.classList.add('open');
    });
  }

  if (closeMenuBtn && menu) {
    closeMenuBtn.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (menu) {
          menu.classList.remove('open');
        }
      });
    });
  }

  if (orderProjectBtn && menu) {
    orderProjectBtn.addEventListener('click', e => {
      e.preventDefault();

      const footerSection = document.getElementById('footer');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }

      menu.classList.remove('open');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const menu = document.getElementById('menu');

  // Відкриття меню
  // openMenuBtn.addEventListener('click', function () {
  //   menu.classList.add('active');
  // });

  // Закриття меню
  // closeMenuBtn.addEventListener('click', function () {
  //   menu.classList.remove('active');
  // });

  // // Закриття при кліку поза меню
  // document.addEventListener('click', function (event) {
  //   if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
  //     menu.classList.remove('active');
  //   }
  // });
});
