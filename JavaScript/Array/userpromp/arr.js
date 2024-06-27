let n = prompt("Enter your array size");
let array=[];

for(let i=1;i<=n;i++)
    {
        array[i-1]=i;
    }
    console.log(array);

    let sum=array.reduce((res,cur)=>{
        return res + cur;
    });
    console.log(sum);

    let fact=array.reduce((res,cur)=>{
        return res*cur;
    });
    console.log(fact);