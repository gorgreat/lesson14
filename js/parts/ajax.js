function ajax() {
  //Форма
  let message = new Object();
  message.loading = 'Загрузка...';
  message.success = 'Спасибо! Мы свяжемся с вами в самое ближайшее время';
  message.failure = 'Ошибка на сервере';

  let form = document.getElementsByClassName('main-form')[0],
    formContact = document.getElementById('form'),
    input = document.getElementsByTagName('input'), //все инпуты беру для очитки так как 2 формы
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  // функция отправляет 2 формы с помощью this - после успешной отправки - появляется сообщение для отправки - мне как раз для лендинга нужно было, ни как не мог сделать - тут уже готове решение и более менее понятно почему так происходит
  function sendMessage() {
    this.addEventListener('submit', function (event) {
      event.preventDefault();
      this.appendChild(statusMessage);

      //AJAX
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      let formData = new FormData(form);

      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState == 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            //Добавление контента на страницу
            closePopup(); //закрываем первый попап
            overlaySendShow(); // показываем что все ок в Новом попап

            //это закрыть новый попап  
            okClose.addEventListener('click', function () {
              closePopupOk();
            });
            //очистить сообщение
            statusMessage.innerHTML = '';
          } else {
            statusMessage.innerHTML = message.failure;
          }

        }
      }
      //Очистка формы
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }

    });
  };

  sendMessage.call(form);
  sendMessage.call(formContact);
}

module.exports = ajax;
