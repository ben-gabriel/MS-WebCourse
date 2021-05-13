
document.getElementById('containerBox').style.position = 'absolute';

document.getElementById('positionChangerBtn').onclick = changePositioning;

function changePositioning() {
    
    classToModify = document.getElementById('containerBox');

    let containerPosition = classToModify.style.position;
    
    
    if(containerPosition === 'absolute'){
        classToModify.style.position = 'static'
    }
    else if(containerPosition === 'static'){
        classToModify.style.position = 'absolute'
    }
    
    
    console.log("container position -> ", containerPosition);
    

    
}    




