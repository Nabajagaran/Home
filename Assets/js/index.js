let navIcon = document.querySelector('.ri-menu-3-fill');
let nav = document.querySelector('.nav-content');
let navOptions = nav.querySelectorAll('li a');
let signBtn = document.querySelector('.sign-btn');
let signPage = document.querySelector('.signin-page');
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
navOptions.forEach((val)=>{
    val.addEventListener('click', (event)=>{
        nav.classList.remove('slideIn-RtoL');
        navIcon.classList.remove('ri-xrp-line');
        event.stopPropagation();
    });
});

//!.................. CAROUSEL ....................

let carouselCtrl = document.querySelectorAll('.pandel-carousel i');
let carouselCard = document.querySelectorAll('.card');
let carousel = document.querySelector('.pandel-carousel ul');
let carouselCount = 0;

function activeCard(){
    if(carouselCount == carouselCard.length-1){
        carouselCount = 0;
        return carouselCount;
    }
    carouselCount+=1;
    return carouselCount;
};
function activeCardP(){
    if(carouselCount == 0){
        carouselCount = carouselCard.length-1;
        return carouselCount;
    }
    carouselCount-=1;
    return carouselCount;
};
function carouselPrev(){
    let val=activeCardP();
    shiftCard(val);
};
function carouselNext(){
    let val=activeCard();
    shiftCard(val);
};
function shiftCard(index){
    switch(index){
        case(0):
            carousel.style.transform = "translateX(0vw)";
        break;
        case(1):
            carousel.style.transform = "translateX(-100vw)";
        break;
        case(2):
            carousel.style.transform = "translateX(-200vw)";
        break;
        case(3):
            carousel.style.transform = "translateX(-300vw)";
        break;
    }
};
for(let i=0;i<carouselCtrl.length;i++){
    carouselCtrl[0].addEventListener('click',carouselPrev);
    carouselCtrl[1].addEventListener('click',carouselNext);
};

//............... CAROUSEL : OnClick Bigger Image Showing....................
let clickedCard = document.querySelector('.clicked-card');
let bigImg = document.querySelectorAll('.clicked-card img');
for(let i=0; i<carouselCard.length; i++){
    carouselCard[i].addEventListener('click', (event)=>{
        clickedCard.style.display = 'flex';
        bigImg[i].style.display = 'block';
        event.stopPropagation();
        console.log('hello');
    });
}
clickedCard.addEventListener('click',()=>{
    clickedCard.style.display = 'none';
    bigImg.forEach((val)=>{
        val.style.display='none';
    })
})
setInterval(carouselNext, 3000);

//......................... CAROUSEL END .........................
