var scrolled;
var timer;

// обращение к элементу
var btnTop = document.getElementById('Top');

// появление в середине

window.addEventListener('scroll', func);
btnTop.hidden = true;
function func() {
    scrolled = window.pageYOffset;
    if (scrolled <= 1200) {
        btnTop.hidden = true;
    }
    else {
        btnTop.hidden = false;
    }
}


// плавная прокрутка

btnTop.onclick = function () {
    scrolled = window.pageYOffset;
    scrollBackTop();
}

function scrollBackTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 500; //скорость прокрутки
        timer = setTimeout(scrollBackTop, 80)
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
    
} 