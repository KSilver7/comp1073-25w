/* charAt() */
// This is the reference to the HTML <p> where we want the output to be shown
const output = document.querySelector('#output');

/* Today we'll answer the following questions:

What is the charAt() method?

What does the charAt() method do?

When would the charAt() method be used?

Where would the charAt() method be used?

How would the charAt() method be used?
*/

// STEP: 1 What is the charAt() method?

/* The charAt() method is a built-in JS function from the string class.
This means that it ONLY works with string objects. You can't use it with
arrays, numbers, booleans, or any other data type that isn't a string.

Because it's built-in, it doesn't require any extra framewords or libraries 
or imports. 

It's called using dot notation. You may come across mention of it like this:
string.charAt(index)
Where the word string is a placeholder for a real string, and the
word index is a placeholder for the index number you want to find.*/

// STEP: 2 What does the charAt() method do?

/* The charAt() method is used to return the character that is at the
index value that you specify. The charAt() method uses 0-based indexing just like
arrays that use brackets, indexOf(), substr(), and slice() amoung others.
This means that if you want the first letter of your string to be returned to you,
you need to put in that the index is [0].

If you wanted to return the last letter of the string, you would need
to do a calculation with the .length property (or count out the index placing yourself).*/

// STEP: 3 When would the charAt() method be used?

/* - Any time you have a string and wish to either retireve a single character from a specific index 
position, like the first letter, the last letter or the 3rd letter in, this is when you would use the
charAt() method.
 -It can be used in more complex ways too like in a loop to go through a string bringing back each letter one at a time.
 -Perhaps you want to use it in combination with another method like indexOf() to find the first letter of 
a word that starts with a certain letter.
 -It could also be used in a loop with another variable like reverse to itterate through a string and return the
letters in reverse order.

Or in a better summarized saying, it's like this quote here:
"It is frequently utilized in data validation, parsing, and formatting tasks where precise string manipulation is required."
Quote from https://docs.vultr.com/javascript/standard-library/String/charAt  retrieved on (Apr. 12, 2025).
 */

// STEP: 4 Where would the charAt() method be used?
/* In a broader sence of the question, the charAt() method, because it's part of the JS language, can be used
in any JS environment. More directly, the charAt() method can be called on a string variable
(add .charAt() to the end of a string variable) or a string literal(a string in quotes) */

// STEP: 5a How would the charAt() method be used?
// Let's create some examples of how to use the charAt() method.

// STEP: 5b Use the charAt() method.

// Here is an example of the charAt() method on a string literal.
// console.log("Mango".charAt(0));
/* This outputs "M".
Take note that this was a string literal. We gave it string without creating a variable.*/

// Here is an example of the charAt() method on a string variable.
let fruitName = "Mango";
// console.log(fruitName.charAt(0));
/* This outpus "M" as well.
This time, we used a variable which holds the string instead of using the string directly. */

/* These examples are a little more complex. We'll use the output to the HTML output to see
how these would show up on a webpage.*/
let string1 = "Goodbye Winter!";
let fLetter = string1.charAt(0);
// console.log(`The first letter of the string is: ${fLetter}`);
let lLetter = string1.charAt(string1.length - 1);
// console.log(`The last letter of the string is: ${lLetter}`);
let letter4 = string1.charAt(3);
// console.log(`The fourth letter of the string is: ${letter4}`);
// if you try to get a letter that is out of scope, like letter 99 in this string,
// it will return an empty string.
let letter99 = string1.charAt(99);
// console.log(`The letter at index 99 is out of scope and returns this empty string: ${letter99}`);

// Lets use a for loop to iterate through the string and return each individual letter.
let str = "Georgian"; // This is the string we'll be using.
let result = ""; // Here we want to start with an empty string to build on.
for (let i = 0; i < str.length; i++) {
    result += str.charAt(i); // This adds the letter at the index of i to the result string.
}
// console.log(result);
/* This outputs "Georgian" */

