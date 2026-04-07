function changeImageStyle(){
    const changeImageStyle = document.querySelector('#image');

    const url = prompt("Enter the URL of the new image:");
    if(url){
        changeImageStyle.src = url;
    }else{
        alert('Please enter a valid URL!');
    }

    
    const borderColor = prompt("Enter the border color:");
    if(borderColor){
        changeImageStyle.style.borderColor = borderColor;
    }else{
        alert('Please enter a valid border color!');
    }


    const width = prompt("Enter the width of the image:");
    if(width){
        changeImageStyle.style.width = width;
    }else{
        alert('Please enter a valid width!');
    }


    const height = prompt("Enter the height of the image:");
    if(height){
        changeImageStyle.style.height = height;
    }else{
        alert('Please enter a valid height!');
    }


    const borderRadius = prompt("Enter the border radius of the image:");
    if(borderRadius){
        changeImageStyle.style.borderRadius = borderRadius;
    }else{
        alert('Please enter a valid border radius!');
    }
}