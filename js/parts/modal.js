function modal() {
  //модальное окно
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  //функция открытия модальнго окна
  function showPopup() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  //функция закрытия модального окна
  function closePopup() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  }

  more.addEventListener('click', function () {
    showPopup.call(more);
  });

  close.addEventListener('click', function () {
    closePopup.call(close);
  });

  //Перебрал все кнопки циклом и при нажании на любую выходит попап
  let descriptionBtn = document.querySelectorAll('.description-btn');
  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
      showPopup.call(descriptionBtn[i]);
    });
  };

  //Можно ли тут сделать с помощью делегирования событий?

  //модальное окно Об успешной отправке сообщения

  let overlaySend = document.querySelector('.overlaySend'),
    okClose = document.querySelector('.ok');

  function overlaySendShow() {
    overlaySend.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  function closePopupOk() {
    overlaySend.style.display = 'none';
    document.body.style.overflow = '';
  };
}
module.exports = modal;
