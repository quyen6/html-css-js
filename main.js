// function getName(x,y){
//     return x+y;
// }
// console.log(`check: `, getName(5,6));
///arrow function

let sum = (a,b, callback)=> {
    let tong = a+b;
    setTimeout(()=> {
        
    }, 5000);
    let i = 0 ;
    let timer = setInterval(() => {
        
        callback(tong);
        i++;
        if (i===5 ){
         clearInterval(timer);
        }
    }, 1000);
}


let printSum = (message)=> {
    console.log(`check`, message)
}
sum(6,9, printSum)