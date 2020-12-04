
// fetch('https://gnews.io/api/v4/search?q=example&token=API-Token').then(function (response) {
//     return response.json();
// });
// // .then(function (data) {
// //     console.log(data);
// // });


const testApi = async () =>{
    const noticia = await fetch('https://gnews.io/api/v4/search?q=example&country=au&token=a8f4357881532af17f0324b5422963d7');

    let resultJson;
    if(noticia.ok){
        resultJson = await noticia.json();
        console.log(resultJson.articles);
        console.log(resultJson.articles[0].title)
        printOnScreen(resultJson);
    }
    return resultJson;
}
testApi();

const printOnScreen = (dataText) => {

    //https://stackoverflow.com/questions/32855524/javascript-for-loop-append-element-in-several-places

    var menu = document.querySelectorAll('#noticia');

    for (let key = 0; key<4; key++){
        const noticiaTitle = document.createElement('h2');
        noticiaTitle.className = 'card-title d-flex align-items-center text-center w-100 mb-0';
        noticiaTitle.textContent = dataText.articles[key].title;

        const noticiaImagen = document.createElement('img');
        noticiaImagen.className = "card-img-top rounded mx-auto d-block";
        noticiaImagen.src = dataText.articles[key].image;
        

        const noticiaResumen = document.createElement('p');
        noticiaResumen.className = 'text-justify p-2 mb-0';
        noticiaResumen.textContent = dataText.articles[key].description;

        const noticiaUrl = document.createElement('a');
        noticiaUrl.className = 'text-info text-decoration-none text-center p-2';
        noticiaUrl.href = dataText.articles[key].url;
        noticiaUrl.textContent="Noticia Completa";
        noticiaUrl.target="_blank";


        menu[key].appendChild(noticiaTitle);
        menu[key].appendChild(noticiaImagen);
        menu[key].appendChild(noticiaResumen);
        menu[key].appendChild(noticiaUrl);

    }
}

