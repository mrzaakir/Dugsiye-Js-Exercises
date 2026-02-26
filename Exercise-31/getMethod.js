// Get Method in js Exercise.....!


async function getData(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');


        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);

        }

        console.log(`Before response received:`, response);


        console.log('-----------------------------');

        const data = await response.json();

        console.log(`After response received successfully:`, data);


    }catch(error){
        
        console.error(`Error fetching data:`, error);
    }
}



getData();