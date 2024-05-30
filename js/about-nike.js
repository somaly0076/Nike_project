const text_list = document.querySelectorAll(".hidden-text .text")
const sub_text = document.getElementById("sub-text")
const timeOut = setTimeout(show, 1000);
const timeOut1 = setTimeout(show1, 1500);
 var time = 0;
function show() {
    document.getElementById("block1").innerHTML = "WE";
}
function show1() {
    document.getElementById("block2").innerHTML = "SERVE";
    time = 1;
    if (time == 1){
text_list.forEach((text,i)=>{
    setTimeout(()=>{
        text.style.opacity = '1';
        text_list[i-1].style.display = 'none';
    },200*i);
})
}
sub_text.classList.remove('hide-text')
sub_text.classList.add('sub-text')


}