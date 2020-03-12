export default function BubbleSort() {

    var myList = [10, 9, 8, 5, 4, 1];
    PrintArray(myList);

    var isListInOrder = false;
    var currentIndex = 0;
    var counterSinceLastSort = 0;

    while (isListInOrder == false) {

        if (currentIndex == myList.length - 1) {
            currentIndex = 0;
        }

        var firstNumber = myList[currentIndex];
        var secondNumber = myList[currentIndex + 1];

        sleep(1000);

        PrintNumbersBeingCompared(firstNumber, secondNumber);

        if (isFirstGreaterThanSecond(firstNumber, secondNumber)) {

            isListInOrder = false;
            counterSinceLastSort = 0;

            var temp = myList[currentIndex];
            myList[currentIndex] = myList[currentIndex + 1];
            myList[currentIndex + 1] = temp;
            sleep(1000);
        }

        PrintArray(myList);
        currentIndex++;
        counterSinceLastSort++;

        if (counterSinceLastSort >= myList.length) {
            isListInOrder = true;
            console.log("I get here");
        }
    }
    
}

function isFirstGreaterThanSecond(firstNum, secondNum) {
    return firstNum > secondNum;
}

function PrintNumbersBeingCompared(firstNum, secondNum) {
    console.log(`Numbers being compared are: ${firstNum}, ${secondNum}`);
}

function PrintArray(myArray) {
    console.log(`The array is currently: ${myArray}`);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
