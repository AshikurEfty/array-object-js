const students ={
    name: 'shakib khan',
    id: 121,
    address: 'jashore',
    isSingle: true,
    friends:['ashik','limon','shimon','emon'],
    movies:[{name:'no 1', year:2015},{name:'hawa', year:2022}],
    act: function(){
        console.log('ami khabo na akhon')
    },
    car:{
        brand:'tesla',
        price:500000,
        made:2022,
        information:{
            ceo:'elon mask',
            place: 'usa',
            name: 'tesla company'
        }
    }
    
}
console.log(students.movies);
students.act();