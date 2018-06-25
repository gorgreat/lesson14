function timer() {
  //таймер
  let deadLine = '2019-03-20';

  /*parse - возвращает целое число, представляющее собой количество миллисекунд, истекших с полуночи 1 января 1970 года GMT+0 до даты, указанной в параметре dateVal*/
  function getTimeRemaining(endtime) {

    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60), //округляем, берем милисекунды и переводим в секунды - получаем остаток от деления
      minutes = Math.floor((t / 1000 / 60) % 60),
      /*        hours = Math.floor( (t / (1000 * 60 * 60)) );// - тут не верно*/
      hours = Math.floor((t) % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));


    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  function setClock(id, endtime) {

    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    let timeInterval = setInterval(updateClock, 1000);

    //обновляем часы
    function updateClock() {

      let t = getTimeRemaining(endtime);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);
      if (t.total < 0) { //если мень дедлайна - то выводим нули
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      } else {
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
      }
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };

    function addZero(num) {
      return ('0' + num).slice(-2); // обрезает 2 ненужных символа
    }

    updateClock();

  };

  setClock('timer', deadLine);
}

module.exports = timer;

