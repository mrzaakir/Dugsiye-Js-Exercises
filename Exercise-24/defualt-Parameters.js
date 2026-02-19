//  Defualt Parameters in js Exercise......

function calculateArea(width, height = width) {
   
    return width ** height;
}

console.log(`The squeredArea is ${calculateArea(4)}`);

