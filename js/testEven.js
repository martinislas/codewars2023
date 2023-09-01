//In this Kata we are passing a number (n) into a function.

//Your code will determine if the number passed is even (or not).

//The function needs to return either a true or false.

//Numbers may be positive or negative, integers or floats.

//Floats with decimal part non equal to zero are considered UNeven for this kata.


//SOLUTION

//This code first checks if the number passed to the function is a float and has a decimal part that is not equal to 0.  if (typeof n === 'number' && n % 1 !== 0)
//If it does, then the function returns false because floats with decimal parts are considered odd for this kata. <Return false;>
//Otherwise, the function checks if the number is even by using the modulo operator. <return n % 2 === 0;>
//The modulo operator returns the remainder of dividing two numbers. 
//If the remainder is 0, then the number is even. Otherwise, the number is odd.

Here is an example of how to use the isEven() function:

function testEven(n) {
 // Check if n is a float and has a decimal part that is not equal to 0.
  if (typeof n === 'number' && n % 1 !== 0) {
    return false;
  }

  // Check if n is even by using the modulo operator.
  return n % 2 === 0;
}
