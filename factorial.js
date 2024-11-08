// let factorial=1;
// for(let i=5; i>=1;i--){
//     factorial=factorial*i;
// }
// console.log(factorial);



function factorial(n){ 
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}
const result=factorial(5);
console.log(result);