function selectionSort(){
    cumDelay = 0;

    for(let i=0; i<(arraySize-1); ++i){
        // updating current of curr index in the arrray
        divColorUpdate(divs[i], divSizes[i], "red");
        
        let minIdx = i;
        
        for(let j=i+1; j<arraySize; ++j){

            divColorUpdate(divs[j], divSizes[j], "yellow"); // color update...
            if(divSizes[j] < divSizes[minIdx]){
                if(minIdx != i){
                    divColorUpdate(divs[minIdx], divSizes[minIdx], "#2e78bd"); // color update
                }
                minIdx = j;
                //color update of smallest sized div, so far....
                divColorUpdate(divs[minIdx], divSizes[minIdx],"red");
            }
            else{
                divColorUpdate(divs[j], divSizes[j], "#2e78bd"); // color update...
            }
        }
        if(minIdx != i){
            let temp = divSizes[minIdx];
            divSizes[minIdx] = divSizes[i];
            divSizes[i] = temp;

            // updating new heights or swapping the values of minIdx with currIdx...
            divColorUpdate(divs[minIdx], divSizes[minIdx], "red");
            divColorUpdate(divs[i], divSizes[i], "red");
            divColorUpdate(divs[minIdx], divSizes[minIdx], "#2e78bd"); // color update....
        }
        
        divColorUpdate(divs[i], divSizes[i], "green"); // color update....    
    }
    divColorUpdate(divs[arraySize-1], divSizes[arraySize-1], "green");
}