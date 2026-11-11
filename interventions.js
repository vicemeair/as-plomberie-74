const menu = document.getElementById('menu');
const links = document.getElementById('links');

menu.addEventListener('click', () => {
    links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        links.classList.remove('open');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
