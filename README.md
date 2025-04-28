# ** 20min_array_methods**


## 1) Day-01:- split():

 `string.split(separator, limit)`
   

      * The split() method in javascript is used to divide a string into an ordered list of substrings,
      * store them in an array and return the array,
      * it does not modify original array.

    1) separator: Specifies the character, string, or regular expression to use for splitting the string. If omitted, the method returns an array with the original string as the only element.
    2) limit:(Optional) A positive integer that limits the number of substrings in the resulting array.



## 2) Day-02:- slice():


   * The slice() method returns the selected elements in an array, as a new array object. It "slices" out what you tell it to.The slice() method has two parameters (start, end), both optional.

   1) Start - An integer. This determines where to start the selection. The first item in the array
      has an index of 0. This is inclusive.
   2) End - An integer. This determines where to end the selection. This is not included in the new
   array object. This is not inclusive (the new array object does not include the end argument).


  
## 3) Day-03:- slice(), substring(), substr():

  * slice()
   String method:
   The slice() method that we learned in our last lesson was an Array method. It also can be used as a
   The difference is that instead of slicing the array indexes, you are slicing the string characters.
   Remember that it has two parameters (start, end). These are the numeric positions starting with 0.

  * substring() is the exact same as slice(), with the only difference being that it can't accept negative values.



## 4) Day-04:- reverse() and join():

 * The reverse() method reverses the order of an array. It has no parameters, it just simply reverses.
 * The join() method joins the elements of an array into a string, and returns a string.



## 5) Day-05:- shift(), unshift(), pop(), push():

 * **Remember, the shifts manipulate the front of arrays. Try to remember this with this phrase,
      "Everyone likes to work first shift!" Cause that's true right?

 * shift() and unshift(): The shift() method removes the first array element and "shifts" all of the other elements to a lower index.
 * The pop() method returns the array element that is "popped off" the end of the array.
 * If you wanted to add it back just use push():



 ## 6) Day-06:- charAt(), indexOf(), lastIndexOf():

 * The charAt() method returns the character at a specified index of a string.

 * It has one parameter, (index) So our parameter is an index position, and it returns the letter in that position. Just remember this:
   What position is such-and-such character at (char at)?

  * position of a value.
  * Now where charAt() gives us the value of the position we pass as an argument, indexOf() gives us the In one instance we are getting the character at, and the    other we are getting the index of.
   
   indexOf() takes two arguments:

   1.The search value - the string we are searching for
   2.The starting index - the index from where we are to start the search. This is optional.
   ...so indexOf(searchValue, startingIndex);



## 7) Day-07:- String(), toString(), toFixed(), Number(), parseFloat(), parseInt()

   ### toString() and String();


     * toString() AND String() both convert a number to a string.


   ### toFixed();


     * toFixed() does the same as toString() but it returns the string with a set number of decimals that you would pass in as an argument.
     * The most widely used is the money format which is two decimal places.

   ### Number();


     * This is by far the simplest and does the opposite of String(). 


   ### parseInt()
      
      * parseInt() parses a string and returns a whole number
      
      * This is a great way to round a string into a whole number (with an exception as noted below).
   


   ### parseFloat();
      
      * parseFloat() parses a string and returns a number

   ### ===== Number to string =======

      * toString(); - converts a number to a string
      * String(); - converts a number to a string
      * toFixed(); - converts a number to a string with a parameter to set number of decimal places


   ### =======String to number ========

      * Number(); - converts a string to a number
      * parseInt(); - parses a string and returns a number that is rounded down.
      * parseFloat(); - parses a string and returns a number that keeps its decimal places (if it has them).



## 8) Day-08:- Math.round(), Math.ceil(), Math.foor(), Math.max(), Math.min()

   * Math is a built-in JavaScript object that allows you to perform mathematical tasks on numbers.



   * The Math.round() method returns the value of a number rounded to the nearest integer.

   * Math.ceil() returns a value rounded up to its nearest integer.

   * Math.floor() returns a value rounded down to its nearest integer.


   * Math.min() and Math.max():

      1) The min() and max() methods do just what they suggest: They return either the lowest number of

      2) the numbers passed to it (min) or the largest number of the numbers passed to it (max).


## 9) Day-09:- forEach()

   * The forEach method executes a provided function once for each array element.

   *The forEach() method does not actually return anything but 'undefined.' It mutates each array element and is done, discarding the return value.


## 10) Day-10:- map()

   * The map() method creates a new array with the results of calling a function for every array element.

   * That sounds sort of like the forEach method right? Well, there is a subtle, yet important, difference.
      The forEach() method does not actually return anything but 'undefined.' It mutates each array element
      and is done, discarding the return value. An example may be something like iterating over each array
      element and saving the mutated values to a database....and done.
   * On the other hand, the map() method iterates over an array, transforms each element of the array, and returns a new array with the transformed values!! This      new  array is the same size and does not discard any element like filter() method does.

   * Now what parameters do you think the map() method uses? Take a guess. You got it:
      1) element - the current element being processed in the array.
      2) index - the array index of the current element.
      3) arr - the original array object
   
   ### Important Recap

   * The difference between map() and forEach() is that map actually returns something (a new array), while the forEach() method returns nothing (undefined).

   * This is key. Once you have that, just remember that map() iterates over an array, calling a function foreach element, and returning the transformed elements into a new array of the same size.












