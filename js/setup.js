'use strict';

var seekAvatar = document.querySelector(".setup-open");

seekAvatar.addEventListener('click', function() {
  document.querySelector("div.overlay.setup").classList.remove("invisible");
});



seekCross.addEventListener("click", function() {
  document.querySelector("div.overlay.setup").classList.add("invisible");
});

var nameField = document.querySelector(".setup-user-name");
nameField.required = true;
nameField.maxLength = 50;

var seekWizardCoat = document.getElementById("wizard-coat");
seekWizardCoat.addEventListener("click", function() {
  var coatColor = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
  var rand = Math.floor(Math.random()*coatColor.length);
  seekWizardCoat.style.fill = coatColor[rand];
});

var seekWizardEyes = document.getElementById("wizard-eyes");
seekWizardEyes.addEventListener("click", function() {
  var eyesColor = ["black", "red", "blue", "yellow", "green"];
  var rand = Math.floor(Math.random()*eyesColor.length);
  seekWizardEyes.style.fill = eyesColor[rand];
});

var seekWizardFireball = document.querySelector(".setup-fireball-wrap");
seekWizardFireball.addEventListener("click", function() {
  var fireballColor = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
  var rand = Math.floor(Math.random()*fireballColor.length);
  seekWizardFireball.style.backgroundColor = fireballColor[rand];
});
