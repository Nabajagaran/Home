let navIcon = document.querySelector('.ri-menu-3-fill');
let nav = document.querySelector('.nav-content');
let signPage = document.querySelector('.signin-page');
let signBtn = document.querySelector('.sign-btn');
let signPageCloseBtn = document.querySelector('#sign-page-close');

signBtn.addEventListener('click', ()=>{
    signPage.classList.add('slidein-Bottom-to-Top');
});
signPageCloseBtn.addEventListener('click', ()=>{
    signPage.classList.remove('slidein-Bottom-to-Top');
});
navIcon.addEventListener('click', (evt)=>{
    navIcon.classList.toggle('ri-xrp-line');
    nav.classList.toggle('slideIn-RtoL');
    evt.stopPropagation();
});