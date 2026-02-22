// Snycronous and Asynchronous Exercise......


// Synchronous 
console.log("This is the first message");

function blockedCode() {
    alert("This function blocks execution");

    return [{id:101, name:'Ali', age: 25, city:'Muqdisho'},
        {id:102, name:'Hassan', age: 30, city:'Hargeisa'}, 
        {id:103, name:'Amina', age: 28, city:'Bosaso'}];

};

console.log(blockedCode());

console.log("This will only execute after the alert is dismissed");


console.log("--------------------------------------------------");

// Asynchronous

console.log("This is the second message");

function nonBlockedCode(callback) {
    setTimeout(()=>{
        const xug =[{id:101, name:'Ali', age: 25, city:'Muqdisho'},
        {id:102, name:'Hassan', age: 30, city:'Hargeisa'}, 
        {id:103, name:'Amina', age: 28, city:'Bosaso'}];

        callback(xug);
    }, 2000);
}


nonBlockedCode((xug)=>{
    console.log("Here is the user data:", xug); 
});


console.log("This will execute immediately after the first message, without waiting for the data to be retrieved");






