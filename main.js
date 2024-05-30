document.addEventListener('DOMContentLoaded', function () {
    let rasm = document.querySelectorAll('.carousel img');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let i = 0;

    function img(nI) {
        rasm[i].classList.remove('active');
        i = nI;
        rasm[i].classList.add('active');
    }

    prev.addEventListener('click', function () {
        let nI = (i > 0) ? i - 1 : rasm.length - 1;
        img(nI);
    });

    next.addEventListener('click', function () {
        let nI = (i < rasm.length - 1) ? i + 1 : 0;
        img(nI);
    });

    function slider() {
        let nI = (i < rasm.length - 1) ? i + 1 : 0;
        img(nI);
    }

    setInterval(slider, 3000);
});
