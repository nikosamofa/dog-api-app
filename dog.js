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


function displayResults(getDog) {         
    let result= '';
    for (let i=0; i < getDog.length; i++){
     result += $(".dog-images").closest(".dog-list").append(
        `<li><input type="image" src="${i}" alt="picutre of a Dog" class="dog-images">
                </li>`) + ';';  } 
    return result;       
};


function all() {
    console.log("The page has loaded")
    watchForm();
};

$(all);