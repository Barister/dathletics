// scroll-background

const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

function toggleHeaderClass() {
   if (window.scrollY > 0) {
      header.classList.add('scroll');
      logo.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
      logo.classList.remove('scroll');
   }
}

window.addEventListener('scroll', toggleHeaderClass);


//burger activation

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {

   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
});


// catalog tabs


function changeTab(event, category) {

   event.preventDefault();

   const tabs = document.querySelectorAll('.tabs-catalog__tab');

   tabs.forEach(tab => {

      if (tab.dataset.category === category) {
         tab.classList.add('active');
      } else {
         tab.classList.remove('active');
      }
   });

   const contents = document.querySelectorAll('.cards-catalog__item');
   const maxVisibleItems = 8; // Максимальное количество отображаемых элементов
   let visibleItemCount = 0; // Счетчик отображенных элементов

   contents.forEach(content => {
      if (visibleItemCount < maxVisibleItems && (category === 'all' || content.dataset.category.includes(category))) {
         content.style.display = 'flex';
         visibleItemCount++;
      } else {
         content.style.display = 'none';
      }
   });
}



// Вызывается при полной загрузке контента
document.addEventListener('DOMContentLoaded', function () {
   // Создание пользовательского события
   const customEvent = new Event('customInit');

   // Вызов функции changeTab с созданным событием и категорией 'all'
   changeTab(customEvent, 'all');
});

changeTab(event, 'all');

// More click active

const elseHeader = document.querySelector('.else-catalog__header');
const elseMenu = document.querySelector('.else-catalog__menu');

elseHeader.addEventListener('click', () => {

   elseMenu.classList.toggle('active');

});


//slider scroll of testimonials-body

function slideSection() {
   const scrollBar = document.querySelector('.scroll-bar');
   const bodyTestimonials = document.querySelector('.body-testimonials');

   // Получаем значение ползунка
   const sliderValue = scrollBar.value;

   // Вычисляем насколько нужно сдвинуть содержимое блока body-testimonials
   const contentScrollPosition = (sliderValue * (bodyTestimonials.scrollWidth - bodyTestimonials.clientWidth)) / 100;

   // Применяем стили для сдвига содержимого блока body-testimonials
   bodyTestimonials.style.transform = `translateX(-${contentScrollPosition}px)`;
}

