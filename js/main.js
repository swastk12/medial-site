


let menubar = document.querySelector('.fa-bars');
let mynav = document.querySelector('.nav');


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('nav-toggle')
}