// Functions can take parameters and return values
function addNumbers(a, b) {
    return a + b;
}

document.write("addNumbers(3, 4) = ", addNumbers(3, 4), "<br />");

// Call by value (changes to parameter will not persist after function ends)
function tryToIncrement(z) {
    z++;
}

var x = 5;
document.write("x = ", x, "<br />");
tryToIncrement(x);
document.write("x = ", x, "<br />");

// We can pass functions as parameters
function timesTwo(z) {
    return z * 2;
}

function timesThree(z) {
    return z * 3;
}

function doMath(func, z) {
    return func(z);
}

document.write("doMath(timesTwo, 5) = ", doMath(timesTwo, 5), "<br />");
document.write("doMath(timesThree, 5) = ", doMath(timesThree, 5), "<br />");


// We can assign functions to variables, store them in arrays,
// pass them into other functions and return them from functions
var square = function(num){
  return num * num;
};
 
document.write("square(3) = ", square(3), "<br />");

// There is no function overloading, but we can pass a variable number of parameters
// Receive variable number of arguments
function getSum() {
  var sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
document.write("getSum(1,2,3) = ", getSum(1,2,3), "<br />");
document.write("getSum(1,2,3,4,5,6) = ", getSum(1,2,3,4,5,6), "<br />");

// Recursive Function
function factorial(num){
  if(num <= 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}