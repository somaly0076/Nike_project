// hover the navigation bar
const menu = document.querySelectorAll('.menu li');

menu.forEach((li)=>{
  li.addEventListener('mouseover',function(){
    document.querySelector('main').style.filter = 'blur(4px)';
  })
  li.addEventListener('mouseout',function(){
    document.querySelector('main').style.filter = 'blur(0px)';
  })

})

menu[1].addEventListener('mouseover',function(){
  document.querySelector('main').style.filter = 'blur(4px)';
})

const drop_down = document.querySelector('.menu');
if (drop_down.style.visibility ==='visible'){
  console.log(drop_down.style.visibility)

}
console.log(drop_down.style)

const menu_icon = document.getElementById('menu-icon');
const close_icon = document.getElementById('close-icon');
const mobile_menu = document.getElementById('mobile-menu');
menu_icon.addEventListener('click',function(){
    mobile_menu.style.right='0px'
    document.querySelector('main').style.filter= 'blur(4px)';

});
close_icon.addEventListener('click',function(){

    mobile_menu.style.right='-320px'
    document.querySelector('main').style.filter= 'blur(0px)';
});

// accordion from W3school
var acc = document.getElementsByClassName("accordion-footer");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}