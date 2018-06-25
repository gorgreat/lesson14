function calc() {
  let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
    place = document.getElementById('select'),
    totalPrice = document.getElementById('total'),
    personsSum = 0,
    daySum = 0,
    total = 0;

  totalPrice.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daySum + personsSum) * 4000;
    if (persons.value == '' || restDays.value == '' || persons.value <= 0 || restDays.value <= 0) {
      totalPrice.innerHTML = 0;
    } else {
      totalPrice.innerHTML = total;
    };
  });

  restDays.addEventListener('change', function () {
    daySum = +this.value;
    total = (daySum + personsSum) * 4000;
    if (persons.value == '' || restDays.value == '' || persons.value <= 0 || restDays.value <= 0) {
      totalPrice.innerHTML = 0;
    } else {
      totalPrice.innerHTML = total;
    };
  });

  place.addEventListener('change', function () {

    if (persons.value == '' || restDays.value == '' || persons.value <= 0 || restDays.value <= 0) {
      totalPrice.innerHTML = 0;
    } else {
      let a = total;
      totalPrice.innerHTML = a * this.options[this.selectedIndex].value;;
    };
  });
}

module.exports = calc;