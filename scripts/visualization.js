let speed = 100;
let delayTime;

inputSpeed.addEventListener("input", setSpeed);

function setSpeed(){
    let visSpeed = inputSpeed.value;
    switch(Number(visSpeed)){
        case 1: speed = 10;
            break;
        case 2: speed = 20;
            break;
        case 3: speed = 40;
            break;
        case 4: speed = 100;
            break;
    }

    delayTime = 10000/(Math.floor(arraySize/10)*speed); // for increasing the algo speed decrease the delayTime by increasing speed varaiable.. 
}



let cumDelay = 0;  // This is to be updated on every div change. So that the visualization can be visibe.


function divColorUpdate(cont, height, color){
    
    window.setTimeout(function(){
        cont.style = `margin: 0% ${marginSize}%; background-color: ${color}; width: ${100/(arraySize-(2*marginSize))}%; height: ${height}%;`
    }, cumDelay += delayTime);

}


