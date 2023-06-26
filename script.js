// const sections =document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .list ul li");
// window.onscroll = ()=> {
//     var current ="";
//     sections.forEach((section)=>{
//         const sectionTop = section.offsetTop;
//         if(pageYOffset >= sectionTop-60){
//             current= section.getAttribute("id");

//         }
//     }
//     );
//     navLi.forEach(
//         (li)=> {
//             li.classList.remove("active");
//             if(li.classList.contains(current)){
//                 li.classList.add("active");
//             }
//         }
//     );
// };
// let marker =document.getElementById("maker");
let items= document.querySelectorAll('nav a');
// function indicator(e){
//   marker.style.left = e.offsetLeft+"px";
//   marker.style.width = e.offsetWidth+"px";
// }

let menu = document.querySelector(".line");
let Ma= document.querySelector(".point");
menu.addEventListener('click',()=> {
    Ma.classList.toggle("create");
})
items.forEach(link =>{
  link.addEventListener("click",()=> {
  //  indicator(e.target);
   Ma.classList.toggle("create");
  })
}
)
var i = 0 ; 
var t = ' "Gunta Rakesh" ';
var speed = 260 ; 
function NameWrite()
{
  
   if( i < t.length )
   {
     document.getElementById("name1").innerHTML+=t.charAt(i);
     i++;
     setTimeout(NameWrite,speed);
   }
   else 
  {
    document.getElementById("name1").innerHTML='   ';
    i=0;
  }
}

setInterval(() => {
    NameWrite();
}, 4000 );

// setInterval( NameWrite(), 5000 );





$(document).ready(function(){
  $(".preloader").fadeOut(5000);
})
