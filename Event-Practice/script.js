// The purpose of this script is to practice the use of event driven
//  actions, the main idea is to have a button which when clicked,
//  triggers a change in color on the child number 2.
// In order to practice asynchronicity too, while the event driven
//  action happens, the child number 1 should be simultaneously
//  changing color on its own, every x amount of time (e.g. 1 sec).
// An interesting way to expand this idea in the future, would be 
//  to make te change between colors a fading transtition, or similar.


const child1 = document.getElementById('c1');
const child2 = document.getElementById('c2');
const btn = document.getElementById('btn');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeColor(element, n1, n2, n3){
    element.style.background = `rgb(${n1},${n2},${n3})`;
}

function changeColorRandom(element){

    let n1 = getRandomInt(255);
    let n2 = getRandomInt(255);
    let n3 = getRandomInt(255);

    element.style.background = `rgb(${n1},${n2},${n3})`;
}

//btn.addEventListener('click', () => {changeColorRandom(child2)});
btn.addEventListener('click', changeColorRandom.bind(null,child2));


setInterval(() => {
    changeColorRandom(child1);
}, 1000);




/*
function loop(){
    
    let int1, int2, int3;
    for (let i = 0; i < 10; i++) {
        int1 = getRandomInt(255);    
        int2 = getRandomInt(255);    
        int3 = getRandomInt(255);    
       
        console.log(i);
        changeColor(child1,int1,int2,int3);
        //console.log(int1);
    }

}*/

