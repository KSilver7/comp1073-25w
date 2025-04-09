const output = document.querySelector('#output');
/* set the const output to select the output id set in the <p> on the html*/
const btn = document.querySelector('button');

/* Create a class 'Smoothie */
class Smoothie {
    // the properties of the smoothie
    size;
    base;
    ingredients;
    // constructor for the class
    constructor(size, base, ingredients) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
    }
    // method to make the smoothie
    mixIt() {
        // make an img element
        const beverage = document.createElement("img");
        // put the image path. Original image from https://creazilla.com/media/clipart/842650/smoothie with a cc license.
        let beverageImage = "images/smoothie-purp.svg";
               
        if (this.base === "water" || this.base === "ice" || this.base === "coconut-water") {
            // grab the water based smoothie image instead
            beverageImage = "images/smoothie-blue.svg";
        }
        if (this.base === "lemon-aid" || this.base === "tropical-punch" || this.base === "tomato-juice") {
            // get the juice based smoothie image instead
            beverageImage = "images/smoothie-pink.svg";
        }
        if (this.base === "yogurt" || this.base === "milk" || this.base === "lactose-free-milk" 
            || this.base === "almond-milk" || this.base === "soymilk") {
                // grab the dairy based smoothie image instead
                beverageImage = "images/smoothie-yellow.svg";
        }
        else {
            //grab the default smoothie image instead'
            beverageImage = "images/smoothie-purp.svg";
        }
        // set the src attribute for the img element
        beverage.setAttribute("src", beverageImage);
        // set the img size based on the size ordered
        let beverageSize;
        // I'll use a switch  since its short and sweet for our cup sizes
        switch(this.size) {
            case "small":
                beverageSize = "125";
                break;
            case "medium":
                beverageSize = "175";
                break;
            case "large":
                beverageSize = "225";
                break;
            case "extra-large":
                beverageSize = "275";
                break;
            default:
                beverageSize = "175";
        };
        // set the height of the img element here
        beverage.setAttribute("height", beverageSize);
        // set the description of the beverage as the img title
        let description = `A ${this.size} smoothie with a ${this.base} base and ${this.ingredients} ingredients`;
        beverage.setAttribute("title", description);
        // insert the img of the smoothie into the page
        output.appendChild(beverage);
    };
};
// add event listener for the button
btn.addEventListener("click", function() {    
    // get the size, then base, then ingredients in an array
    // used .value in hopes of it pulling the right valuefrom the form
    const size = document.querySelector("#size").value; 
    const base = document.querySelector("#base").value;
    // this should use the comma as a delimiter and break the string down
    const ingredients = document.querySelector("#ingredients").value.split(",");
    const smoothie = new Smoothie(size, base, ingredients);
    // mix it should make it now if we call it
    smoothie.mixIt();
});