function insertionSort(){
    cumDelay = 0;

    for(let i=1; i<arraySize; i++){
        divColorUpdate(divs[i], divSizes[i], "yellow");

        let key = divSizes[i];
        let j = i-1;
        while(j>=0 && (key < divSizes[j])){

            divColorUpdate(divs[j], divSizes[j], "red"); // color update....
            divColorUpdate(divs[j+1], divSizes[j+1], "red"); // color update....

            divSizes[j+1] = divSizes[j];
            divColorUpdate(divs[j+1], divSizes[j+1], "red"); //Height Update....
            divColorUpdate(divs[j], divSizes[j], "red"); //Height Update....

            if(j == (i-1)){
                divColorUpdate(divs[j+1], divSizes[j+1], "yellow");// color update
            }
            else{
                divColorUpdate(divs[j+1], divSizes[j+1], "#2e78bd");// color update
            }
            j--;
        }
        divSizes[j+1] = key;

        divColorUpdate(divs[j+1], divSizes[j+1], "red"); // Height update
        
        for(let t=0; t<=i; ++t){
            divColorUpdate(divs[t], divSizes[t], "green");// color update
        }
    }

}