("use strict");

const theArray = [];
//let index = 0;
let counter = 0;

countingArray(); // by calling it, it should add one to the array until 9.

// ------ DOESN'T WORK --------

/* const countingArray = () => {
  setTimeout(countingArray, 1000);
  index++;
  if (theArray.length  < 9) {
    theArray.unshift(index);
  } else {
    theArray.pop(index);
  }
}; */

function countingArray() {
  counter++;
  theArray.unshift(counter); //adding it at the beggining of the array
  if (theArray.length > 9) {
    theArray.pop(counter); //removing 1 fron the end.
  }
  setTimeout(countingArray, 1000);
}
