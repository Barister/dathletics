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

//changeTab(event, 'all');

// More click active

const elseHeader = document.querySelector('.else-catalog__header');
const elseMenu = document.querySelector('.else-catalog__menu');

elseHeader.addEventListener('click', () => {

   elseMenu.classList.toggle('active');

});


// slider value change after touch move of content

function handleContentScroll(contentContainer, scrollBar) {
   let contentScrollLeft = contentContainer.scrollLeft;
   let maxScroll = contentContainer.scrollWidth - contentContainer.clientWidth;

   // Нормализовать значение для ползунка
   let normalizedValue = (contentScrollLeft / maxScroll) * 100;

   // Установить нормализованное значение для ползунка
   scrollBar.value = normalizedValue;
}

const testimonialsScrollBar = document.querySelector('.testimonial-section__scroll-bar');
const testimonialsContentContainer = document.querySelector('.body-testimonials');

const galleryScrollBar = document.querySelector('.gallery-section__scroll-bar');
const galleryContentContainer = document.querySelector('.body-gallery');

testimonialsContentContainer.addEventListener('touchmove', function (event) {
   handleContentScroll(testimonialsContentContainer, testimonialsScrollBar);
});

galleryContentContainer.addEventListener('touchmove', function (event) {

   handleContentScroll(galleryContentContainer, galleryScrollBar);
});

testimonialsContentContainer.addEventListener('pointermove', function (event) {
   event.preventDefault();
   handleContentScroll(testimonialsContentContainer, testimonialsScrollBar);
});

galleryContentContainer.addEventListener('pointermove', function (event) {
   event.preventDefault();
   handleContentScroll(galleryContentContainer, galleryScrollBar);
});




//slider scroll of sections-body-content

function slideSection(targetInput, targetClass) {
   let scrollBar = document.querySelector(`.${targetInput}`);
   let scrollContainer = document.querySelector(`.${targetClass}`);

   // Получаем значение ползунка
   const sliderValue = scrollBar.value;

   // Вычисляем насколько нужно сдвинуть содержимое блока
   const contentScrollPosition = (sliderValue * (scrollContainer.scrollWidth - scrollContainer.clientWidth)) / 100;

   // Прокручиваем блок до указанной позиции
   scrollContainer.scrollLeft = contentScrollPosition;
}


// contacts-form visibility

const messageBtn = document.querySelector('.btn-contacts__message');
const formDiv = document.querySelector('.content-contacts__form');

messageBtn.addEventListener('click', () => {
   formDiv.classList.toggle('active');
})

// toreach visibility

const toreachBtn = document.querySelector('.btn-contacts__reach');
const toreachDiv = document.querySelector('.content-contacts__toreach');

toreachBtn.addEventListener('click', () => {
   toreachDiv.classList.toggle('active');
})
