window.addEventListener('DOMContentLoaded', function () {
  let tab = require('../parts/tab.js');
  let timer = require('../parts/timer.js');
  let modal = require('../parts/modal.js');
  let ajax = require('../parts/ajax.js');
  let slider = require('../parts/slider.js');
  let calc = require('../parts/calc.js');

  tab();
  timer();
  modal();
  ajax();
  slider();

});
