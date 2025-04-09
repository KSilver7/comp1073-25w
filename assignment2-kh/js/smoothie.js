const output = document.querySelector('#output');
/* set the const output to select the output id set in the <p> on the html*/

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
        // Figure out what base is used
        let smoothieBase;
        
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
    }
};