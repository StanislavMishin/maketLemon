var burger = document.getElementById('burger');
var menu = document.getElementById('menuBurger');
var bodyLoad = document.body;

burger.addEventListener('click', funcAddClass);
menu.addEventListener('click', funcAddClass);

function funcAddClassLock() {
    bodyLoad.classList.toggle('load');
}
function funcAddClass() {
    burger.classList.toggle('action');
    menu.classList.toggle('action');
}