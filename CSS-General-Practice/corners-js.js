

function changePositioning(classToModify) {

    let button = document.getElementById('positionChangerBtn');
    let containerPosition = classToModify.style.position;

    
    console.log("asssss ", containerPosition);
    
}

document.getElementById('containerBox').style.position = 'absolute';

changePositioning(document.getElementById('containerBox'));

