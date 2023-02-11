// window.addEventListener('scroll',function(){
//     const value = window.scrollY;
//     const s = document.getElementById('s');
//     const m = document.getElementById('m');
//     const mt = document.getElementById('mt');

//     s.style.left=value*0.2 + 'px';
//     m.style.top= value*1 + 'px';
//     // mt.style.top = value*0.9 + 'px';
//    console.log(value);
//    const mountain = 160;
//    const nav = document.querySelector('#nav');
//    if(mountain < Math.round(value) )
//    {
//      nav.classList.add('bg-secondary');
//      nav.style.transition='0.7s';
//    }
//    else{
//     nav.classList.remove('bg-secondary');
//    }
// });
const p1 = document.getElementsByClassName('p1')[0];


window.addEventListener('scroll',function(){
  const aboutme1 = document.getElementById('aboutme');
  const saya1 = document.getElementById('saya');
  const value = window.scrollY;
  saya1.style.zIndex=10;
  saya1.style.top=value*0.7 + 'px';
  //aboutme1.style.left=value*0.9 +'px';






});
