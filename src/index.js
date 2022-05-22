import 'normalize.css';
import './styles/main.scss';
import './index.html';




// popup 1ый вариант-----------------------------------------

// const blackout = document.querySelector('.blackout');
// const openPopup = document.querySelectorAll('.open-popup');
// const closePopup = document.querySelectorAll('.popup-close');
// const body = document.body;



// function openModal(name) {
//    document.body.className = 'modal-' + name;
//    body.classList.add('locked');
//    blackout.style.display = 'block';
   
// }

// openPopup.forEach(el => {
//    let name = el.getAttribute('data-name')
//    el.addEventListener('click', () => { openModal(name) })
//    console.log('>>', el)
// });

// function closeModal() {
//    document.body.className = '';
//    body.classList.remove('locked');
//    blackout.style.display = 'none';
// };

// closePopup.forEach(el => {
//    el.addEventListener('click', () => { closeModal() });
//    console.log('>>', el)
   
// });

// blackout.onclick = function (event) {
//    if (event.target == blackout) {
//       blackout.style.display = 'none';
//       body.classList.remove('locked');
//    }
// };



// popup 2ой вариант

const openPopup = document.querySelectorAll('.open-popup');
const popup = document.querySelectorAll('.popup');

const body = document.body;

function openModal(elem) {
   elem.classList.add('is-active');
   body.classList.add('locked');
}

function closeModal(e) {
   if (e.target.classList.contains('popup-close') || e.target.classList.contains('blackout') || e.target.classList.contains('blackout-menu') || e.target.classList.contains('modal-nav__link')) {
      e.target.closest('.popup').classList.remove('is-active');
      body.classList.remove('locked');
   }
   
}

openPopup.forEach(btn => {
   btn.addEventListener('click', (e) => {
      let data = e.target.dataset.name;

      popup.forEach(modal => {
         if (modal.dataset.modal == data) {
            openModal(modal);
         }
      }) 
      
   })
})

popup.forEach(modal => {
   modal.addEventListener('click', e => closeModal(e))
});

window.addEventListener('keydown', e => {
   popup.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains('is-active'))
         modal.classList.remove('is-active');
         body.classList.remove('locked');
   })
})
     


// select

let select = function() {
   let selectResult = document.querySelectorAll('.select__result');
   let selectItem = document.querySelectorAll('.select__item');

  
   selectResult.forEach(item => {
      item.addEventListener('click', selectToggle) 
   });

   selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
   });

   function selectToggle() {
      this.parentElement.classList.toggle('active');
   };

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         resultText = select.querySelector('.select__result');
      resultText.innerText = text;
      select.classList.remove('active');
   };
  
};

select();

// let select = function() {
//    let select = document.querySelector('.select');
//    let selectResult = select.querySelector('.select__result');

  
  
//   selectResult.addEventListener('click', selectToggle)

//   document.body.addEventListener('click', selectChoose)

//    function selectToggle(e) {
//      e.stopPropagation();
//      this.parentElement.classList.toggle('active');
//    };

//    function selectChoose(e) {
//      let inside = e.target.closest('.select');
//      if(inside){
//        selectResult.textContent = e.target.innerText;
//      }
//      select.classList.remove('active')
//    };
   
// };

// select();

// Smooth Scroll
const links = document.querySelectorAll(".header__link");

for (const link of links) {
   link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");

   document.querySelector(href).scrollIntoView({
      behavior: "smooth"
   });
}