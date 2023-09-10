function heapSort(){
    cumDelay = 0;

    heapSortFunc();
}

function swap(i, j){
    divColorUpdate(divs[i], divSizes[i], "red"); // color update....
    divColorUpdate(divs[j], divSizes[j], "red"); // color update....

    let temp = divSizes[j];
    divSizes[j] = divSizes[i];
    divSizes[i] = temp;

    divColorUpdate(divs[i], divSizes[i], "red"); // Height update....
    divColorUpdate(divs[j], divSizes[j], "red"); // Height update....

    divColorUpdate(divs[i], divSizes[i], "#2e78bd"); // color update....
    divColorUpdate(divs[j], divSizes[j], "#2e78bd"); // color update....

}

function heapify(idx, n){
    let largest = idx;
    let left = (2*idx + 1);
    let right = left + 1;

    if((left < n) && (divSizes[left] > divSizes[largest])){
        if(largest != idx){
            divColorUpdate(divs[largest], divSizes[largest], "#2e78bd"); // color update....
        }
        largest = left;
        divColorUpdate(divs[largest], divSizes[largest], "red"); // color update....
    }
    if((right < n) && (divSizes[right] > divSizes[largest])){
        if(largest != idx){
            divColorUpdate(divs[largest], divSizes[largest], "#2e78bd"); // color update....
        }
        largest = right;
        divColorUpdate(divs[largest], divSizes[largest], "red"); // color update....
    }

    if(largest != idx){
        swap(idx, largest);

        heapify(largest, n);
    }

}

function heapSortFunc(){
    for(let i=Math.floor(arraySize/2)-1; i>=0; --i){
        heapify(i, arraySize);
    }

    for(let i=arraySize-1; i>0; --i){
        swap(0,i);
        divColorUpdate(divs[i], divSizes[i], "green"); // color update....
        divColorUpdate(divs[i], divSizes[i], "yellow"); // color update....

        heapify(0, i);
        divColorUpdate(divs[i], divSizes[i], "#2e78bd"); // color update....
        divColorUpdate(divs[i], divSizes[i], "green"); // color update....

    }

    divColorUpdate(divs[0], divSizes[0], "green"); // color update....
}