const hamEl = document.getElementById('hamburger-menu');
const navEl = document.getElementById('nav-items');
hamEl.addEventListener('click', function () {
    if (navEl.classList.contains('nav-expand')) {
        navEl.classList.remove('nav-expand');
    } else {
        navEl.classList.add('nav-expand');
    }
});
