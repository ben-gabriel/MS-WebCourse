
document.getElementById('containerBox').style.position = 'absolute';

document.getElementById('positionChangerBtn').onclick = changePositioning(document.getElementById('containerBox'));

function changePositioning(classToModify) {
    
    let containerPosition = classToModify.style.position;

    if(containerPosition == 'absolute'){
        classToModify.style.position = 'static'
    }
    else if(containerPosition == 'static'){
        classToModify.style.position = 'absolute'
    }
    
    
    console.log("container position -> ", containerPosition);
    

    
}    




