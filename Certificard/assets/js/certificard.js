let darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
const html = document.querySelector('html');
const btnColorTheme = document.querySelector('#btnColorTheme');
let toggle = function () {
    html.classList.remove('theme-default');

    if (darkMode) {
        html.classList.add('theme-light');
        html.classList.remove('theme-dark');
    }
    else {
        html.classList.remove('theme-light');
        html.classList.add('theme-dark');
    }

    darkMode = !darkMode;

    btnColorTheme.textContent = darkMode ? 'Light' : 'Dark';
}

btnColorTheme.addEventListener('click', toggle);