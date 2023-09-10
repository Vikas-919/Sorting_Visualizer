

function bubbleSort(){
    cumDelay = 0;
    for(let i=0; i<arraySize; i++){
        for(let j=0; j<(arraySize-i-1); j++){
            divColorUpdate(divs[j], divSizes[j], "yellow");
        
            if(divSizes[j] > divSizes[j+1]){
                //Updating color of swapping pair of array
                divColorUpdate(divs[j], divSizes[j], "red");
                divColorUpdate(divs[j+1], divSizes[j+1], "red");

                //operation
                let temp = divSizes[j];
                divSizes[j] = divSizes[j+1];
                divSizes[j+1] = temp;

                //updating new sizes of div...
                divColorUpdate(divs[j], divSizes[j], "red");
                divColorUpdate(divs[j+1], divSizes[j+1], "red");
            }
            divColorUpdate(divs[j], divSizes[j], "#2e78bd");
        }
        divColorUpdate(divs[arraySize-i-1], divSizes[arraySize-i-1], "green");
    }
}