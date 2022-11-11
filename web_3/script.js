let btn = document.querySelector(".theme-button");
let theme = document.querySelector("#theme-link");

btn.onclick = function() {
  if (theme.getAttribute("href") == "project.css") {
    theme.href = "dark-theme.css";
  } 
  else {
    theme.href = "project.css";
  }
};

let button = document.querySelector(".theme-button_dark");
let media = document.querySelector("#theme-link_media");

button.onclick = function() {
  if (media.getAttribute("href") == "media.css") {
    media.href = "dark-theme_media.css";
  } 
  else {
    media.href = "media.css";
  }
};

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let list = document.querySelector('.header__list');

burger.onclick = function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  back.classList.toggle('lock')
};

list.onclick = function() {
  menu.classList.toggle('active');
  back.classList.toggle('lock');
  burger.classList.toggle('active');
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}