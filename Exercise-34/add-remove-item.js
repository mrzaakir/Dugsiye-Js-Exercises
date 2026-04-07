const list =document.querySelector('#list');


function additem(){
    const newItem = document.createElement('li');

    newItem.textContent ='New Item Added!';

    list.appendChild(newItem);
}

function removeItem(){
    const lastItem = list.lastElementChild;

    if(lastItem){
        list.removeChild(lastItem);
    }else{
        alert('No more items to remove!');
    }
}