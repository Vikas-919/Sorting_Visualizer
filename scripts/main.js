// Variables......
const inputSize = document.getElementById('arrSize');
let arraySize = inputSize.value;

const inputSpeed = document.getElementById('algoSpeed');
const genarate = document.getElementById('genarateArr');

const algo = document.getElementById('algoSelect');
const sortIt = document.getElementById('sortBtn');
console.log(sortIt);

let divSizes = [];
let divs = [];
let marginSize;
const container = document.getElementById('arrayContainer');

// Array Genaration and Updation......

genarate.addEventListener("click", genarateArray);
inputSize.addEventListener("input", updateArrSize);

// Function of Array genaration......
function genarateArray(){
    container.innerHTML="";

    for(let i=0; i<arraySize; i++)
    {
        divSizes[i]=Math.floor(Math.random() *(inputSize.max - inputSize.min) ) + 20;
        divs[i]=document.createElement("div");
        container.appendChild(divs[i]);
        marginSize=0.1;
        divs[i].style=` margin:0% ${marginSize}%; background-color: #2e78bd; width:${100 / (arraySize - (2 * marginSize))}%; height:${divSizes[i]}%;`;
    }
}

function updateArrSize(){
    arraySize = inputSize.value;
    genarateArray();
}

window.onload = updateArrSize();


//Run the selected sorting algorithm......
sortIt.addEventListener("click", runAlgo);

// function disableBtns(){
//     sortIt.disabled = true;

// }

function runAlgo(){
    switch(algo.value)
    {
        case "Bubble Sort" : bubbleSort();
            break;
        case "Selection Sort": selectionSort();
            break;
        case "Insertion Sort": insertionSort();
            break;
        case "Merge Sort": mergeSort();
            break;
        case "Quick Sort": quickSort();
            break;
        case "Heap Sort": heapSort();
            break;
        
    }
}
