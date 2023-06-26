
let items= document.querySelectorAll('nav a');
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



$(document).ready(function(){
  $(".preloader").fadeOut(5000);
})
