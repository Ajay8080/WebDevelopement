/*create a button using javascript and background color is red and color is white and 
insert the button in first */
let nBtn= document.createElement("button");
nBtn.innerText="Click me";
nBtn.style.color="white";
nBtn.style.backgroundColor="red";

document.querySelector("body").prepend(nBtn);


