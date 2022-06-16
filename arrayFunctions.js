const users = [{
    name: 'Mehmet',
    age: 20
},
{
    name: 'Ahmet',
    age: 18
},
{
    name: 'Mustafa',
    age: 19
}];

/*
    push
    map
    find
    filter
    some
    every
*/

//push
users.push('Ayse');
console.log(users);

//map
for(let i=0;i<users.length;i++){
   console.log(user[i]); 
};
//same
users.map((item) => {
    console.log(item.name);
});

//find
const findIt = user.find((item) => item.name === 'Mehmet');
console.log(result);

//filter
const filtered = users.filter((item) => item.name === 'Mehmet' && item.age < 20)
console.log(filtered);

//some
const someDemo = users.some(item => item.age === 10);
console.log(someDemo);

//every
const everyDemo = users.every(item => item.age > 30);
console.log(everyDemo);
