// youtube carousel tutorial

const carousel = document.querySelector('.carousel')
let firt_img = carousel.querySelectorAll('img')[0];
firt_img_width = firt_img.clientWidth + 14 ;
const carousel_icon= document.querySelectorAll('.wraper i');
const carousel_children = [...carousel.children];
let img_view = Math.round(carousel.offsetWidth / firt_img.offsetWidth)
carousel_children.forEach(img=>{
    console.log()
})
carousel_children.slice();




console.log('img-view: '+img_view)
carousel_icon.forEach(icon => {
    icon.addEventListener('click',function(){
        carousel.scrollLeft += icon.id == 'left'? -firt_img_width:firt_img_width; 
        if(carousel.scrollLeft === 0){
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2* carousel.offsetWidth);
            // carousel.classList.remove("no-transition")
            console.log('end of left')
         }else if(carousel.scrollLeft === carousel.scrollWidth-carousel.offsetWidth){
            carousel.classList.add("no-transition"); 
            carousel.scrollLeft = carousel.scrollWidth - (2* carousel.offsetWidth);
            // carousel.scrollLeft = carousel.offsetWidth
            carousel.classList.remove("no-transition")
            console.log('end of right')
         }
      

    })
})

//insert copies of last few card to begining of carousel for infinite scrolling
carousel_children.slice(-img_view).reverse().forEach(img=>{
    carousel.insertAdjacentElement('afterbegin', img.outerHTML);
})
//insert copies of first few card to begining of carousel for infinite scrolling
carousel_children.slice(0,img_view).reverse().forEach(img=>{
    carousel.insertAdjacentElement('beforeend',img.outerHTML);
})
let infinite_scroll = ()=>{
    if(carousel.scrollLeft === 0){
        console.log('end of left')
    }else if(carousel.scrollLeft === carousel.scrollWidth-carousel.offsetWidth){
           carousel.classList.add("no-transition");
        console.log('end of right')
    }
}
carousel.addEventListener('scroll',infinite-scroll)

