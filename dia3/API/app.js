//let  urlText = `http://www.omdbapi.com/?t=${movieSearch}&type=movie&apikey=c27f41a8`;

//let urlPoster  = `http://www.omdbapi.com/?i=${dataText.imdbID}&type=movie&apikey=c27f41a8`;


const getSearchText = () =>{
    const submit = document.getElementById('submit');

    submit.addEventListener('click', (e)=>{
        e.preventDefault(); //the web is not refreshed when i clik on the buttom

        const movieSearchTitle = document.getElementById('movieSearchTitle').value ? document.getElementById('movieSearchTitle').value : false ;
        console.log(movieSearchTitle);
        
        
        testApi(movieSearchTitle);

    });

    //console.log(submit);
}

getSearchText();

const testApi = async (movieSearchTitle) =>{
    const resultText = await fetch(`http://www.omdbapi.com/?t=${movieSearchTitle}&type=movie&apikey=c27f41a8` , {
        method : 'GET', 
    });
    
    
    let resultJson;
    if(resultText.ok){
        resultJson = await resultText.json();
        // console.log(resultJson);
        console.log(resultJson.Poster);
        printOnScreen(resultJson);
    }
    return resultJson;
} 

//para mostrar en pantalla en el html

const printOnScreen = (dataText) => {

    movieContainer.innerHTML= "";

    // dataText.forEach(element => {
    //     console.log(dataText;
    // });
    // let testArray = Array.from(dataText);
    // console.log(testArray);
    // let movieArray = [];
    // console.log(movieArray);
    
    // const movieContainer = document.querySelector('#movieContainer');
    
    // const {Title, Actors, Year, Poster} = dataText;
    
    // console.log(Title, Actors, Year, Poster);
    
    const moviePoster = document.createElement('img');
    moviePoster.className = "card-img-top";
    moviePoster.src = dataText.Poster;
    moviePoster.alt = 'poster ' + dataText.Title;
    
    const movieTitle = document.createElement('h3');
    movieTitle.className = 'text-center card-title pt-4 pl-2';
    movieTitle.textContent = dataText.Title;
    
    // const movieActors = document.createElement('li');
    // movieActors.textContent = Actors;
    
    // const movieYear = document.createElement('li');
    // movieYear.textContent = Year;
    
    
    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieTitle);
    // movieContainer.appendChild(movieActors);
    // movieContainer.appendChild(movieYear);
    
    // for (let key in dataText) {
    //     let movieActors = document.createElement('h2');

    //     movieArray.push(key + ': ' + dataText[key]);
    // }

    for (let key in dataText){
        if (key !== 'Title' && key !== 'Poster' && key !== 'Plot' && key !== 'Ratings' && key !== 'imdbVotes' &&  key !== 'imdbID' && key !== 'Type' && key !== 'DVD' && key !== 'BoxOffice' && key !== 'Website' && key !== 'Response' ){
            // console.log(dataText['Title']);
            let movieInfo = document.createElement('li');
            movieInfo.className = 'list-group-item';
            movieInfo.textContent = key +': '+dataText[key];
            movieContainer.appendChild(movieInfo);
        }
    }
    
    
    

}

//testApi();