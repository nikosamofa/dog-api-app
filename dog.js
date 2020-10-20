//this function fetches three dog photos when called 
function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();

        //this is the user input
        let submissions = $('.number-of-dogs').val();
        
        //this make the image section visible    
        $('.images').removeAttr('hidden');
        displayDogs(submissions);
    })
};


function getTheDog(submissions) {
     const url = `https://dog.ceo/api/breeds/image/random/${submissions}`;
    fetch(url)
        .then(response => response.json())
        .then(getDog => displayResults(getDog))
        .catch(error => alert('something went wrong, please try again'));
};


function displayDogs(submissions, ) {
     number = getTheDog(submissions);
     console.log(getTheDog);
    $(".dog-images").replaceWith(
        `<input type="image" src="${number}" alt="picutre of a Dog" class="dog-images">`
    )};

function all() {
    console.log("The page has loaded")
    watchForm();
};

$(all);