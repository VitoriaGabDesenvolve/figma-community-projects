// Função do menu

function clickMenu() {
    let menu = document.querySelector('.header__menu_itens');
    menu.classList.toggle('ativo');
}

// Slide

const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
