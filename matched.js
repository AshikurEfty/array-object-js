const numbers =[ 45,65,23,98,19];

// for(let i =0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'xiomi phone one night', price: 19000},
    {id: 2, name:'iphone', price: 20000},
    {id: 3, name: 'iphone 8', price: 24000},
    {id: 4, name:'iphone 11', price: 180000},
    {id: 5, name: 'Lenovo', price: 190000},
    {id: 6, name:'Nokia', price: 205000},

]
// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched =[];
    for( const product of products){
        if(product.name.includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);