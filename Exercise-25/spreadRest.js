//  Spread Operators and Rest Parameters in js Exercise......

// Spread operator 

const num =[1,2,3];

const fullNum = [...num, 4,5,6];
console.log(`The full number is ${fullNum}`);


// Rest Operators

function Multply(...tiro){

    return tiro.reduce((wadarta, tiro)=>{
        return wadarta * tiro;
    })
}

console.log(`The result of multiplying the numbers is ${Multply(1,9,3,6)}`);