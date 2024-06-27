let divs=document.querySelectorAll(".box");
console.log(divs);

// simple level of javascript
/* divs[0].innerText="New unique value 1";
divs[1].innerText="New unique value 2";
divs[2].innerText="New unique value 3";*/

// Pro-Level of javascript
let idx=0;
for(div of divs){
    div.innerText=`Unique values ${idx}`;
    idx++;
}
