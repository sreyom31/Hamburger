burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
leftNav=document.querySelector('.leftNav');


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    leftNav.classList.toggle('v-class-resp');
})