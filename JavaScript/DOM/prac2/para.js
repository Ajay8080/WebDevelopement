

/* create <p> in html , give it is clasname and some styling . create a new class in css
and try to append  this class  to the <p> element
did you notice,  how you overwrite  the class name  when you  add a new one  solve yhis problem 
using classList.*/ 
let para=document.querySelector("p");
para.classList.add("newPara");