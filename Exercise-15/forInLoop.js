// for in loop / for of in JavaScript Exercise


const people = [
    {name: 'Axmed', age: 19, city: 'Hargeisa'},
    {name: 'Yusuf', age: 20, city: 'Mugdhisho'},
    {name: 'Abdirahman', age: 21, city: 'mandheera'},
    {name: 'Abdullahi', age: 22, city: 'jigjiga'},
    {name: 'Abdirizak', age: 23, city: 'garissa'},
]



 for (let key in people){

    console.log(`Name: ${people[key].name},\nAge: ${people[key].age},\nCity: ${people[key].city}\n--------`);
 }