'use strict';

var seekAvatar = document.querySelector('.setup-open');

seekAvatar.addEventListener('click', function() {
  document.querySelector('div.overlay.setup').classList.remove('invisible');
});

var seekCross = document.querySelector('.setup-close');

seekCross.addEventListener('click', function() {
  document.querySelector('div.overlay.setup').classList.add('invisible');
});
