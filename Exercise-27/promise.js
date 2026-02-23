//  Promises in js Exercise........!

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const successMessage = false;

            if(successMessage){
                resolve([{id:101,name:"Zacky",age:23, country:'Somalia', city:'Muqdisho'},{id:102,name:"Bella",age:20, country:'kenya', town:'Bangali'}]);
            }else{
                reject('Oh MR/Ms fetching data not available now, try again later!');
            }

        },2000);
    });
}

fetchData().then((info)=>{
    console.log(`Success Message:`,info);
}).catch((qalad)=>{
    console.log(`Error:${qalad}`);
});


