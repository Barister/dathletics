//burger activation

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {

   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
});


// catalog tabs



// function changeTab(category) {
//    const contents = document.querySelector('.tabs-catalog');
//    console.log('contents:', contents);

//    contents.addEventListener('click', (event) => {
//       console.log('event:', event);

//       let clickedTab = event.target;

//       console.log('clickedTab:', clickedTab);


//       return clickedTab.classList.toggle('active');
//    });





//    // contents.forEach(content => {

//    //    console.log('content:', content);
//    //    // content.

//    //    const contentCategories = content.classList.contains(category) || category === 'all';
//    //    if (contentCategories) {
//    //       content.style.display = 'block';
//    //    } else {
//    //       content.style.display = 'none';
//    //    }
//    // });
// }

// Изначально показываем все карточки
//changeTab('all');


function changeTab(category) {
   const contents = document.querySelectorAll('.cards-catalog__item');

   console.log('contents:', contents);

   contents.forEach(content => {
      if (category === 'all' || content.dataset.category.includes(category)) {
         content.style.display = 'flex';
      } else {
         content.style.display = 'none';
      }
   });
}

changeTab('all');