//this function fetches three dog photos when called 
function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();

        //this is the user input
        let submissions = $('.number-of-dogs').val();

        //this make the image section visible    
        $('.images').removeAttr('hidden');
        displayResults(submissions);
    })
};


function getTheDog(submissions) {
    const url = `https://dog.ceo/api/breeds/image/random/${submissions}`;
    fetch(url)
        .then(response => response.json())
        .then(getDog => displayResults(getDog))
        .catch(error => alert('something went wrong, please try again'));
};


function displayResults(getDog) {
    result = '';
    for (let i = 0; i < getDog.length; i++) {
        result += getDog[i]
    };
    $(".dog-images").closest(".dog-list").replaceWith(
        `<li><input type="image" src="${result}" alt="picutre of a Dog" class="dog-images">
                </li>`)
}


function all() {
    console.log("The page has loaded")
    watchForm();
};

$(all);