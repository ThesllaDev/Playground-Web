var cube = document.querySelector('.cube');
var currentSide = 6;
cube.classList.add('show-' + currentSide);

var cubeSize = -1;

function roll() {
    cube.classList.add('spin');
    setTimeout(() => {
        cube.classList.remove('spin');
        cube.classList.remove('show-' + currentSide);
        currentSide = Math.ceil(Math.random() * 6);
        cube.classList.add('show-' + currentSide);
    }, 600);
}

cube.addEventListener('click', roll);

window.onload = window.onresize = () => {
    let dim = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    cubeSize = dim / 4;
    document.body.style.setProperty('--cube-size', cubeSize + 'px');
    document.body.style.setProperty('--cube-size-neg', -cubeSize + 'px');
};