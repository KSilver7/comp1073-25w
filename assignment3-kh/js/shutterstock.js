// URL of the API from Shutterstock (this is the endpoint of the API)
const baseURL = 'https://api.shutterstock.com/v2/images/search';
// Put the API consumer key here
const key = 'MFcUrtNiAHGNG9TADtjxAHA6ADOVTPSW';
let url;
// Grab references to all the DOM elements you'll need to access
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
// Add the event listener to the submit button
searchForm.addEventListener("submit", fetchResults);

// Fuctions go here
function fetchResults(event) {
    // prevent default to stop the form submitting
    event.preventDefault();
    // assemble the full URL
    url = `${baseURL}?api_key=${key}&q=${searchTerm.value}`;
    // shutterstock requires that we add the headers to the request
    const headers = {
        "User-Agent": "COMP1073/1.0"
    };
    console.log(url);

    // use fetch() to pass the URL to the API service, and then pass the JSON to the displayResults().
    fetch(url).then(result => {
        return result.json();
    }).then(json => {
        displayResults(json);
    });
};

