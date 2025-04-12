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

