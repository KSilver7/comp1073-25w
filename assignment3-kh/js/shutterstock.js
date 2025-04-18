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
    url = `${baseURL}?apikey=${key}&query=${searchTerm.value}`;
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

function displayResults(images) {
    // clear out the old results here
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    };
    let articles = json.response.docs;
    // if there isn't an image, give an error msg as a little paragraph
    if (!images) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'No images were found.';
        section.appendChild(paragraph);
        // else if image is found, do a for each loop and attach the image to the section
    } else if (images.length > 0) {
        images.forEach(image => {
            // container for the img
            const article = document.createElement('article');
            // image itself
            const img = document.createElement('img');
            // description for the image
            const caption = document.createElement('p');

            img.src = image.assets.preview.url;
            img.alt = image.description;
            caption.textContent = image.description;
            article.appendChild(img);
            article.appendChild(caption);
            // put the article in the page
            section.appendChild(article);

        });
    } else {
        // just in case there's no image, add an error message
        const paragraph = document.createElement('p');
        paragraph.textContent = 'No images were found.';
        section.appendChild(paragraph);
    };
};
