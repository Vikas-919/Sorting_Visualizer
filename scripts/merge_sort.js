
function mergeSort(){
    cumDelay = 0;
    mergeSortFunc(0, arraySize-1);

}

function merge(start, mid, end){
    let i = start, j = mid+1;
    let arr = [];
    let k = 0;

    for(let itr=start; itr<=end; ++itr){
        if(i > mid){
            arr[k++] = divSizes[j++];
            divColorUpdate(divs[j-1],divSizes[j-1], "red"); // color update....
        }
        else if(j > end){
            arr[k++] = divSizes[i++];
            divColorUpdate(divs[i-1],divSizes[i-1], "red"); // color update....
        }
        else if(divSizes[i] < divSizes[j]){
            arr[k++] = divSizes[i++];
            divColorUpdate(divs[i-1], divSizes[i-1], "red"); // color update....
        }
        else{
            arr[k++] = divSizes[j++];
            divColorUpdate(divs[j-1], divSizes[j-1], "red"); // color update....
        }
    }
    // restoring the merged values in the original array....
    for(let itr=0; itr<k; ++itr){
        divSizes[start++] = arr[itr];
        divColorUpdate(divs[start-1], divSizes[start-1], "green"); // color update....
    }
}

function mergeSortFunc(start, end){
    if(start < end){
        let mid = Math.floor((start+end)/2);
        divColorUpdate(divs[mid], divSizes[mid], "yellow"); //color update....

        mergeSortFunc(start, mid);
        mergeSortFunc(mid+1, end);

        merge(start, mid, end);
    }
}