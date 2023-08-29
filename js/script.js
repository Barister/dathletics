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

