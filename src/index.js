import 'normalize.css';
import './styles/main.scss';
import './index.html';




// меню-----------------------------------------
const body = document.body;


const blackout = document.querySelector('.blackout');
const btn = document.querySelector('.discuss');
const closePopup = document.querySelector('.popup-close');
console.log(btn);

   function openModal(name) {
      document.body.className = 'modal-' + name; 
      blackout.style.display = 'block';
   };
   
   
   function closeModal() {
      document.body.className = '';
      blackout.style.display = 'none';
   };

btn.onclick = openModal;
closePopup.onclick = closeModal;


blackout.onclick = function (event) {
   if (event.target == blackout) {
      blackout.style.display = 'none';
   }
};

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

