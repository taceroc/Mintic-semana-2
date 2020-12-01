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

    console.log(submit);
}

getSearchText();

const testApi = async (movieSearchTitle) =>{
    const resultText = await fetch(`http://www.omdbapi.com/?t=${movieSearchTitle}&type=movie&apikey=c27f41a8` , {
        method : 'GET', 
    });
    
    
    let resultJson;
    if(resultText.ok){
        resultJson = await resultText.json();
        console.log(resultJson);
        console.log(resultJson.Poster);
    };
} 

testApi();