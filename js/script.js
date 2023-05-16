 let icons = document.querySelectorAll('.tab-pane.active.show #overLayerPortofolio>i');
let layer = document.querySelector('.layer');
let afterLayer = document.querySelector('.layer #imgContainer')

let closeIcon = document.querySelector('.layer #imgContainer i.fa-regular.fa-circle-xmark')
let nextIcon = document.querySelector('.layer #imgContainer i.fa-regular.fa-circle-right');
let prevIcon = document.querySelector('.layer #imgContainer i.fa-regular.fa-circle-left');

let imgs = Array.from(document.querySelectorAll('.portfolioImgs img'));
let imgSrc;
let index;


let navbar = document.querySelector('nav');
let startContent = document.querySelector('#layer > div');
let navAnchor = document.querySelectorAll('.navbar .nav-link');
let section = document.querySelectorAll('section');

let upBtn = document.querySelector('#upBtn');

nextIcon.style.display='block';
prevIcon.style.display='block';


// ------ set image --------------------------
icons.forEach(icon=>{
    icon.addEventListener('click' ,()=>{
        if(layer.classList.contains('d-none')){
            layer.classList.replace('d-none' , 'd-block');
        
        }else{
            layer.classList.add('d-block');
        }
        nextIcon.style.display='block';
        prevIcon.style.display='block';
    
        imgSrc = icon.parentElement.previousElementSibling.getAttribute('src');  //relative link 
        // let imgSrc = icon.parentElement.previousElementSibling.src;  bad link absolute link
        
        afterLayer.style.cssText = `background-image: url(${imgSrc})`;
    
        imgs.forEach(img=>{
            if(img.getAttribute('src') === imgSrc){
                index = imgs.indexOf(img);
             }} );
    
    
             if(index >= imgs.length-1){
                nextIcon.style.display='none';
             }
             if(index <= 0){
                prevIcon.style.display='none';
             }
    })
})

// -------- next btn -------------------------------
        let nextSlide =()=>{

            layer.classList.replace('d-none' , 'd-block');
            nextIcon.style.display='block';
            prevIcon.style.display='block';
        
            if(index >= imgs.length-1){
                nextIcon.style.display='none';
            }

        index ++;

        if(index >= imgs.length){
            index = imgs.length-1;
        }

        if(index<imgs.length){
            nextIcon.style.display='block';
        
            afterLayer.style.cssText=`background-image: url(${imgs[index].getAttribute('src')})`
            if(index >= imgs.length-1){
                // index = 0;
                // afterLayer.style.cssText=`background-image: url(${imgs[index].getAttribute('src')})`;
                nextIcon.style.display='none';
                index = imgs.length-1;
            }
        }
        // else if(index == imgs.length){
        //     // index = 0;
        //     // afterLayer.style.cssText=`background-image: url(${imgs[index].getAttribute('src')})`;
        //     nextIcon.style.display='none';
        
        // }
                //     imgSrc =  img.parentElement.parentElement.nextElementSibling.children[0].children[0].getAttribute('src');
        }

        nextIcon.addEventListener('click' , nextSlide);

// ---------prevIcon--------------------------------
let prevSlide = ()=>{
    layer.classList.replace('d-none' , 'd-block');
    nextIcon.style.display='block';
    prevIcon.style.display='block';

    if(index <=0 || index>imgs.length-1){
        prevIcon.style.display='none';
            }
            
            index--;

if(index < 0){
    index =0;
}

if(index >= 0){
        afterLayer.style.cssText=`background-image: url(${imgs[index].getAttribute('src')})`
        if(index==0 || index > imgs.length -1){
    prevIcon.style.display='none';
    index = 0;
        }
    }
    // index=imgs.length-1;
        // afterLayer.style.cssText=`background-image: url(${imgs[index].getAttribute('src')})`
}
prevIcon.addEventListener('click' , prevSlide);

// ------------ close btn ----------------------
let closeSlide =()=>{
    layer.classList.replace('d-block' , 'd-none');

}
closeIcon.addEventListener('click' , closeSlide);

// -------- TYPING -------------------------------
var typed = new Typed('#element', {
    strings: ['Designer', 'Developer'],
    typeSpeed: 100,
    backDelay:1500,
    smartBackspace: false,
    loop: true,
    showCursor: false,
  fadeOut: true,
  });

//   ------AOS --------------------------------

AOS.init();

// ----- navbar -------------------------------------------


window.addEventListener('scroll' , ()=>{


if(window.scrollY >= startContent.offsetTop-50){
    navbar.style.backgroundColor='#2423238a';
    upBtn.style.display='block';
}
else{
    navbar.style.backgroundColor='transparent';
    upBtn.style.display='none';
}

// ------ set navbar anchor -------------------------
if(window.scrollY == 0){
    document.querySelectorAll('#navbarSupportedContent a').forEach((e)=>{
        e.style.color='#fff';
         })
         document.querySelector('#navbarSupportedContent a.active').style.color='#ff305b';
    
    }

// ----- set nav anchor style ---------------------
// section.forEach(sec =>{
//     navAnchor.forEach(anchor =>{
//         if(anchor.innerHTML == sec.id ){

//              if(window.scrollY >= sec.offsetTop && window.scrollY >= (sec.offsetTop-sec.offsetHeight)){
//                    anchor.style.color='#ff305b';
//             }
//     }
//     else if (!window.scrollY < sec.offsetTop && window.scrollY<=(sec.offsetTop-sec.offsetHeight)){
//         console.log(sec.id);        
//            anchor.style.color='#fff';

//     }
   
// });

// });
// ---------------------------
});


// ------- upBtn --------------------------------
upBtn.addEventListener('click' , ()=>{
window.scroll({
    top:0,
    behavior:"smooth"
});

 document.querySelectorAll('#navbarSupportedContent a').forEach((e)=>{
e.style.color='#fff';
 })

document.querySelector('#navbarSupportedContent a.active').style.color='#ff305b';

});

// ------------nav anchor color - ------------------------------


navAnchor.forEach((anchor)=>{
anchor.addEventListener('click' , (e)=>{
    let anchor = e.target;

let parent = Array.from(anchor.parentElement.parentElement.children);

parent.forEach((e)=>{
  e.children[0].style.color='#fff';
});
anchor.style.color='#ff305b';

})

})

// -------- keyUp events for open / close images -----------------------------------------

document.addEventListener('keyup' , (e)=>{
    if(layer.style.display='block'){
        if(e.key=='ArrowRight'){
            nextSlide();
        }
        else if(e.key=='ArrowLeft'){
            prevSlide();
        }
        else if(e.key=='Escape'){
            closeSlide();
        }
    }
})
// ------------------------------


