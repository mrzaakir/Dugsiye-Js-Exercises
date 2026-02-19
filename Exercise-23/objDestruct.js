//Object Destructing in js Exercise......

const car = {
    make : 'Toyota',
    model : 'benz',
    year : 2020,
    color : 'light blue'
}


const {make, model} = car;

console.log(`Car make is ${make}\nCar model is ${model}`);