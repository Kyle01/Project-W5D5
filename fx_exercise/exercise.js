//TIME IS EVERYTHING =======================================================
class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    const timeX = new Date();
    this.hours = timeX.getHours();
    this.minutes = timeX.getMinutes();
    this.seconds = timeX.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let secondString;
    let minuteString;
    let hourString;
    
    if (this.seconds < 10) {secondString = `0${this.seconds}`;} else {secondString = `${this.seconds}`;}
    if (this.minutes < 10) {minuteString = `0${this.minutes}`;} else {minuteString = `${this.minutes}`;}
    if (this.hours < 10) {hourString = `0${this.hours}`;} else {hourString = `${this.hours}`;}
    
    console.log(`${hourString}:${minuteString}:${secondString}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();
// clock.printTime();
// clock._tick();
// clock._tick();
// clock._tick();
// clock._tick();

//addNumbers =======================================================
const readline = require('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {return completionCallback(sum);}
  reader.question('gimme a number: ', function (answer) {
    console.log(`${answer}`);
    addNumbers(sum + parseInt(answer), numsLeft - 1, completionCallback);
  });
};
// // 

const ccb = function (sum) {
  console.log(`Total sum: ${sum}`); 
  reader.close();
};

//addNumbers(0, 3, ccb);
//absurd bubble sort =======================================================
// 
function absurdBubbleSort(arr, sortCompletionCallBack) {
  function outerBubblesSortLoop(madeAnySwaps) {
    if(madeAnySwaps === true){
      innerBubbleSortLoop(arr, 0, false, outerBubblesSortLoop);
    } 
    else {
      console.log(arr);
      sortCompletionCallBack();
    }
  }
  outerBubblesSortLoop(true);
}

function askIfGreaterThan(e1, e2, callback){
  reader.question(`Is ${e1} greater than ${e2}? `, function (answer) {
    if(answer === 'yes'){ 
      callback(true); 
    }
    else { 
      callback(false);  
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubblesSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        madeAnySwaps = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubblesSortLoop);
    });
  }
  else {
    outerBubblesSortLoop(madeAnySwaps);
  }
}

const sccb = function() {
  console.log("Thx you for playing");
  reader.close();
}; 

absurdBubbleSort([4,2,5,1],sccb);