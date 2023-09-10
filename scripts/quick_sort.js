function quickSort(){
    cumDelay = 0;
    quickSortFunc(0, arraySize-1);
}

function partition(start, end){
    let piv = divSizes[end]; // assuming the last element as pivot element
    let i = start-1;
    let j = start;

    divColorUpdate(divs[end], divSizes[end], "yellow"); // color update....

    while(j <= (end-1)){
        if(divSizes[j] < piv){
            divColorUpdate(divs[j], divSizes[j], "yellow"); //color update....

            divColorUpdate(divs[i+1], divSizes[i+1], "red"); //color update....
            divColorUpdate(divs[j], divSizes[j], "red"); //color update....

            let temp = divSizes[i+1];
            divSizes[i+1] = divSizes[j];
            divSizes[j] = temp;

            divColorUpdate(divs[i+1], divSizes[i+1], "red"); //Height update....
            divColorUpdate(divs[j], divSizes[j], "red"); //Height update....

            i = i + 1;

            divColorUpdate(divs[i], divSizes[i], "#2e78bd"); //color update....
            divColorUpdate(divs[j], divSizes[j], "#2e78bd"); //color update....

        }
        j++;
    }
    
    divColorUpdate(divs[i+1], divSizes[i+1], "red"); //color update....
    divColorUpdate(divs[end], divSizes[end], "red"); //color update....

    let temp = divSizes[i+1];
    divSizes[i+1] = divSizes[end];
    divSizes[end] = temp;

    divColorUpdate(divs[i+1], divSizes[i+1], "yellow"); //Height update....
    divColorUpdate(divs[end], divSizes[end], "#2e78bd"); //Height update....

    for(let t=start; t<=(i+1); ++t){
        divColorUpdate(divs[t], divSizes[t], "green"); //color update....
    }
    return i+1; // returning the position of the pivot element...

}

function quickSortFunc(start, end){
    if(start < end){
        //stores the position of pivot element...
        let pivotIdx = partition(start, end);

        quickSortFunc(start, pivotIdx-1); // sorts the left side of pivot....
        quickSortFunc(pivotIdx+1, end); // sorts the right side of pivot....

        divColorUpdate(divs[end], divSizes[end], "green");// color update...
    }
    
}

