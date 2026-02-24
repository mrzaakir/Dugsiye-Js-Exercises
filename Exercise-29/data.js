// Data.JSON in js Exercise........!

async function sooAqriXugta(){

    console.log('Kahor inta an Xugta lasoo akhrin...!');


    const response = await fetch("./data.JSON");

    
    const xug =await response.json();

    console.log(`Xugta waxaa laga soo akhrinayaa data.json file-ka...`,xug);

}



sooAqriXugta();

