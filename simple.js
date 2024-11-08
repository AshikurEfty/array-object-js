//    let sum=0;
//     for(i=5; i>=1; i--){
//         sum = sum + i;
//     }
//     console.log(sum);



//recursive function
function sum(i){
    if(i==1){
        return 1;
    }
    return i+sum(i-1);
}
let result= sum(5);
console.log(result);
/*
i+sum(i-1)
5+sum(5-1)
5+sum(4) return
5+4+sum(i-1)
5+4+sum(4-1)
5+4+sum(3) return
5+4+3+sum(i-1)
5+4+3+sum(3-1)
5+4+3+sum(2) return
5+4+3+2+sum(i-1)
5+4+3+2+sum(2-1)
5+4+3+2+sum(1) return
5+4+3+2+1 return
result= 15
*/
