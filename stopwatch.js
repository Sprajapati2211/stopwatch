var body =document.querySelector('body');
var startbtn=document.getElementById('start');
var stopbtn=document.getElementById('stop');
var rebtn=document.getElementById('re')

let condition=false;
 let hr=0;
let min=0;
 let sec=0;
let ms=0;
startbtn.addEventListener('click', function(){
    condition=true;
    stopwatch();
})
stopbtn.addEventListener('click', function(){
    condition=false;
    stopbtn.innerHTML='Resume';
})
rebtn.addEventListener('click', function(){
    condition=false;
    hr=0;
    min=0;
    sec=0;
    ms=0;
document.getElementById('h').innerHTML='0'+hr;
document.getElementById('mi').innerHTML='0'+min;
document.getElementById('s').innerHTML='0'+sec;
document.getElementById('mis').innerHTML='0'+ms;
})
function stopwatch(){
    if(condition){
    ms++;
 if(ms==101){
    sec++;
    ms=0;

} if(sec==60){
  min++;
  sec=0;
}if(min==60){
    hr++;
    min=0;
    sec=0;
}
//setTimeout(stopwatch,1000);
setTimeout(stopwatch,10)


let hrstr=hr;
let minstr=min;
let secstr=sec;
let millistr=ms;
if(hr<10){
    hrstr='0'+hrstr;
}
if(min<10){
    minstr='0'+minstr;
}
if(sec<10){
    secstr='0'+secstr;
}
if(ms<10){
    millistr='0'+millistr
}
document.getElementById('h').innerHTML=hrstr;
document.getElementById('mi').innerHTML=minstr;
document.getElementById('s').innerHTML=secstr;
document.getElementById('mis').innerHTML=millistr;
}
}