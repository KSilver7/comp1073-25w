// Make an array for each category of words in the book
let myPersonsArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
let myVerbsArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
let myAdjectivesArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let myThingsArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let myPlacesArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
// Select the area where we will output the story text
const story = document.querySelector('.story');
const random = document.querySelector('.random');
story.textContent = 'This is your hand made story: ';
random.textContent = 'This is your random story: ';
// Make an array of the arrays
let myArrayMaster = [myPersonsArray, myVerbsArray, myAdjectivesArray, myThingsArray, myPlacesArray];

// Since the physical book has the random button first, we'll create that section of the internal code first        

// // Create a random array selector. Should be similar to using the random number generator in the guessing game, except using the .length of the array instead of a number, and gets multipled to the array. This will give us a random set of words from the array

// let i = Math.floor(Math.random() * myPersonsArray.length);
// let randomArray = myPersonsArray[i];
// console.log(randomArray);

// Now we need a loop to grab a random variable from each of the arrays in the master array
// Since 'i' has been used, we'll use 'j' to represent the random number portion of the loop

for (let i = 0; i < myArrayMaster.length; i++) {
    let j = Math.floor(Math.random() * myArrayMaster[i].length);
    console.log(myArrayMaster[i][j]);
}

// Add an event listenener to the random button. Add spaces between words and a period at the end of the sentence
rnd.addEventListener('click', function() {            
    for (let i = 0; i < myArrayMaster.length; i++) {
        let j = Math.floor(Math.random() * myArrayMaster[i].length);
        if (i === myArrayMaster.length - 1) {
            random.textContent += myArrayMaster[i][j] + '. ';
        } else {
            random.textContent += myArrayMaster[i][j] + ' ';
        }                
    }
});     

// add an event listener to clear the random values
clear.addEventListener('click', function() {
    random.textContent = 'This is your random story: ';
});

clear2.addEventListener('click', function() {
    story.textContent = 'This is your hand made story: ';
});
// Add an event listener to the My Story button
myS.addEventListener('click', function() {

    // Create a variable for the selected option of each dropdown
    let choice = persons.value + ' ' + verbs.value + ' ' + adjectives.value + ' ' + things.value + ' ' + places.value + '.';
    story.textContent = 'This is your hand made story: ' + choice;           
});