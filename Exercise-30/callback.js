// Callback Function Exercise in JavaScript.......


const operate =(w,m,callback)=>{

    return callback(w,m);

};

const add=(w,m)=>{
    return w + m;

};

const subtruct=(w,m)=>{
    return w - m;

};
const multipily=(w,m)=>{
    return w * m;

};
const divide=(w,m)=>{
    return w / m;

};
const remainder=(w,m)=>{
    return w % m;

};

console.log(`Addition:`,operate(10,5,add));

console.log('-----------------------------');

console.log(`Subtraction:`,operate(67,43,subtruct));

console.log('-----------------------------');

console.log(`Multiplication:`,operate(13,7,multipily));

console.log('-----------------------------');

console.log(`Division:`,operate(9,3,divide));

console.log('-----------------------------');

console.log(`Remainder:`,(operate(12,8,remainder)));


