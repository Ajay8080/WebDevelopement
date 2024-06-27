let para=document.querySelector("p");
/*console.log(para.setAttribute("class","newClass"));  // changing for class */

console.log(para.getAttribute("newClass")); // Getting class

// you can give the style also like css using JavaScript
let div=document.querySelector("div");

div.style.backgroundColor="yellow";
div.style.textAlign="Center";
div.style.color="black";
div.style.fontSize="50px";
div.style.border="solid,black,2px";
div.style.height="200px";
div.style.width="200px";
div.innerText="Hallo!! Charlie..";
