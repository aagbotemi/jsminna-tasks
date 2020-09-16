//Task1

//square of number
const numberS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumber = () => {
  numberS.forEach(function(element, index, array) {
    array[index] = Math.pow(element, 2);
  });
  return numberS;
};
console.log(squareNumber());

//filters odd number
const oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getOddNumbers = () => {
  for (var i = 0; i < oddArr.length; i++) {
    if (oddArr[i] % 2 === 1) {
      console.log(oddArr[i]);
    }
  }
}
getOddNumbers();

//sum of arrays
const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addNumber = () => {
  let sum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }
  return sum;
}
console.log(addNumber());


// TASK TWO
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//square number of array using map
const squareArray = () => {
  return arr.map(sqrNum => {
    return Math.pow(sqrNum, 2)
  });
}
console.log(squareArray());

//search odd number array using filter
const oddArray = () => {
  return arr.filter(item => item % 2 === 1)
}
console.log(oddArray())

//sum of arrays using reduce
const addArray = () => {
  let result = arr.reduce((x, y) => x + y);
  return result;
}
console.log(addArray());


//Task 3
//re-arrange array in ascending order
let arr3 = [5, 2, 9, 6, 4, 10, 8, 1, 7, 3];
const reOrderArray = () => {
  let resulT = arr3.sort((x, y) => x - y);
  return resulT;
}
console.log(reOrderArray());