import '../styles/main.scss';

const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');

navbar.addEventListener('click', () => {
    navbar.classList.toggle('navbar--active');
    sidebar.classList.toggle('sidebar--active');
});

console.log('webpack starterkit');
