//humberger

const humberger = document.querySelector('#humberger');
const navmenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
humberger.classList.toggle('humberger-active');
navmenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll =function(){
    const header =document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }
}