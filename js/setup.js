'use strict';

var seekAvatar = document.querySelector(".setup-open");

seekAvatar.addEventListener('click', function() {
  document.querySelector("div.overlay.setup").classList.remove("invisible");
});

var seekCross = document.querySelector(".setup-close");

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
