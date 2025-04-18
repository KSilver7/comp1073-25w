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
    url = `${baseURL}?api_key=${key}&query=${searchTerm.value}`;
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

function displayResults(data) {
    
    const imgCont = document.getElementById('imgRes');
    // clear out the old results here
    imgCont.innerHTML = '';
   
    if (data && data.length > 0) {
        // if its not empty loop and get the images
        data.forEach(image => {
            const imgCont = document.createElement('div');
            imgCont.classList.add('image-container');
            const img = document.createElement('img');
            img.alt = image.description;

            // here we add in what type of image we can get back from the API -- photo or vector
            if (image.image_type === 'photo') {
                img.src = image.assets.preview.url;
            }
            else if (image.image_type === 'vector') {
                img.src = image.assets.preview.url;
            }

            // description for the image
            const desc = document.createElement('p');
            desc.textContent = image.description;

            // put the image in the div container
            imgCont.appendChild(img);
            // put the description inside the paragraph
            imgCont.appendChild(desc);
            // put them both together in the main container
            imgRes.appendChild(imgCont);

        });
   
    } else {
        // just in case there's no image, add an error message
        const noRes = document.createElement('p');
        noRes.textContent = 'No images were found.';
        imgRes.appendChild(noRes);
    };
};
