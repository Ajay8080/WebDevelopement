let btn=document.createElement("button");
btn.innerText="Click Me";
console.log(btn);

let div=document.querySelector("div");
/*div.append(btn); // Buttons comes to last
div.prepend(btn);// buttons comes to star
div.before(btn);  // buttons comes before the div*/
div.after(btn); //buttons comes after the div

//We create new element 

let newEl=document.createElement("h1");
newEl.innerHTML="<i> Dom Manipulation operatin</i>";

console.log(newEl);

/*let  body=document.querySelector("body");
body.prepend(newEl)*/
document.querySelector("body").prepend(newEl);