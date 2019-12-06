import '../styles/main.scss';
import Typed from 'typed.js';


const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');

navbar.addEventListener('click', () => {
    navbar.classList.toggle('navbar--active');
    sidebar.classList.toggle('sidebar--active');
});


//Typing Effect
const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    showCursor: false
});

