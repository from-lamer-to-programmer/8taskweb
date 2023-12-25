// Получение ссылок на элементы формы
const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.getElementsByName('serviceType');
const productOptionSelect = document.getElementById('productOption');
const productPropertyCheckbox = document.getElementById('productProperty');
const priceOutput = document.getElementById('price');

// Функция для пересчета цены
function calculatePrice() {
  // Получение выбранных значений
  const quantity = parseInt(quantityInput.value);
  const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
  const productOption = productOptionSelect.value;
  const productProperty = productPropertyCheckbox.checked;

  // Выполнение расчетов
  let basePrice = 0;
  switch (serviceType) {
    case 'basic':
      basePrice = 100;
      break;
    case 'standard':
      basePrice = 0;
      break;
  }

  let optionPrice = 0;
  switch (productOption) {
    case 'option1':
      optionPrice = 150;
      break;
    case 'option2':
      optionPrice = 100;
      break;
    case 'option3':
      optionPrice = 200;
      break;
      case 'option4':
      optionPrice = 50;
      break;
    case 'option5':
      optionPrice = 170;
      break;
    case 'option6':
      optionPrice = 70;
      break;
      case 'option7':
      optionPrice = 90;
      break;
    case 'option8':
      optionPrice = 150;
      break;
   
  }

  let propertyPrice = productProperty ? 150 : 0;

  const totalPrice = (basePrice + optionPrice + propertyPrice) * quantity;

  // Обновление вывода цены
  priceOutput.textContent = totalPrice;
}

// Обработчики событий для элементов формы
quantityInput.addEventListener('input', calculatePrice);
serviceTypeInputs.forEach(input => input.addEventListener('change', calculatePrice));
productOptionSelect.addEventListener('change', calculatePrice);
productPropertyCheckbox.addEventListener('change', calculatePrice);

// Инициализация расчета цены
calculatePrice();


document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').classList.remove('hidden');
    history.pushState({formOpen: true}, "Форма обратной связи", "?formOpen=true");
  });
  
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.formOpen) {
      document.getElementById('feedbackForm').classList.remove('hidden');
    } else {
      document.getElementById('feedbackForm').classList.add('hidden');
    }
  });
  
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Отправка данных формы на сервер
    
    // Отображение сообщения пользователю
    document.getElementById('feedbackMessage').textContent = 'Спасибо! Ваша форма отправлена.';
    document.getElementById('feedbackMessage').classList.remove('hidden');
    
    // Очистка данных формы
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('organization').value = '';
    document.getElementById('message').value = '';
  });
  
  // Сохранение и восстановление значений формы при повторном открытии страницы
  window.addEventListener('load', function() {
    if (localStorage.getItem('formValues')) {
      const formValues = JSON.parse(localStorage.getItem('formValues'));
      document.getElementById('fullName').value = formValues.fullName;
      document.getElementById('email').value = formValues.email;
      document.getElementById('phone').value = formValues.phone;
      document.getElementById('organization').value = formValues.organization;
      document.getElementById('message').value = formValues.message;
    }
  });
  
  document.getElementById('feedbackForm').addEventListener('input', function() {
    const formValues = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      organization: document.getElementById('organization').value,
      message: document.getElementById('message').value
    };
    localStorage.setItem('formValues', JSON.stringify(formValues));
  });


let btn_form = document.getElementById("btn_form");
let close = document.getElementById("popup_close");
let popup = document.getElementById("popup");
let popup_content = document.getElementById('popup_content');

let popup_inp = document.getElementById('popup_inp');

let popup_content_flag = false;

let flagPopup = 0;

btn_form.addEventListener('click', () => {
    openPopap();
    window.location.href = "#form";
    flagPopup = 1;
})

window.addEventListener('popstate', function(event) {
    if(flagPopup == 1){
        closePopap();
        window.location.href = "";
        flagPopup = 0;
    }
});

close.addEventListener('click', () => {
    closePopap();
    window.location.href = "";
})

popup_content.addEventListener('mousedown', () => {
    popup_content_flag = true;
})

popup.addEventListener('click', () => {
    if (popup_content_flag != true) {
        closePopap();
        window.location.href = "";
    } else {
        popup_content_flag = false
    }
})

function closePopap(){
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
}

function openPopap(){
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
}
