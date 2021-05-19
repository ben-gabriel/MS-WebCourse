// callback function practice
//
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
//
//setTimeout(function, milliseconds, param1, param2, ...)
function myCallBack (n){
    console.log("this is the message number " + n);
}

setTimeout(()=>{
    myCallBack(1);
},3000);

setTimeout(myCallBack, 2000, 2);

myCallBack(3);

