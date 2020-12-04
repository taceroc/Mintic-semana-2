
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
    
    // const noticiaTitle = document.createElement('h2');
    // noticiaTitle.className = 'text-center card-title pt-4 pl-2';
    // noticiaTitle.textContent = dataText.articles[0].title;

    // const noticiaImagen = document.createElement('img');
    // noticiaImagen.className = "card-img-top rounded mx-auto d-block";
    // noticiaImagen.src = dataText.articles[0].image;
    

    // const noticiaResumen = document.createElement('p');
    // noticiaResumen.className = 'text-justify p-2';
    // noticiaResumen.textContent = dataText.articles[0].description;

    // const noticiaUrl = document.createElement('a');
    // noticiaUrl.className = 'text-info text-decoration-none text-center p-2';
    // noticiaUrl.href = dataText.articles[0].url;
    // noticiaUrl.textContent="Noticia Completa"

    // //noticia0.appendChild(noticiaTitle);
    // noticia0.appendChild(noticiaTitle);
    // noticia0.appendChild(noticiaImagen);
    // noticia0.appendChild(noticiaResumen);
    // noticia0.appendChild(noticiaUrl);


    // const noticiaTitle1 = document.createElement('h2');
    // noticiaTitle1.className = 'text-center card-title pt-4 pl-2';
    // noticiaTitle1.textContent = dataText.articles[1].title;

    // const noticiaImagen1 = document.createElement('img');
    // noticiaImagen1.className = "card-img-top rounded mx-auto d-block";
    // noticiaImagen1.src = dataText.articles[1].image;
    

    // const noticiaResumen1 = document.createElement('p');
    // noticiaResumen1.className = 'text-justify p-2';
    // noticiaResumen1.textContent = dataText.articles[1].description;

    // const noticiaUrl1 = document.createElement('a');
    // noticiaUrl1.className = 'text-info text-decoration-none text-center p-2';
    // noticiaUrl1.href = dataText.articles[1].url;
    // noticiaUrl1.textContent="Noticia Completa"

    // //noticia0.appendChild(noticiaTitle);
    // noticia1.appendChild(noticiaTitle1);
    // noticia1.appendChild(noticiaImagen1);
    // noticia1.appendChild(noticiaResumen1);
    // noticia1.appendChild(noticiaUrl1);

    // const noticiaTitle2 = document.createElement('h2');
    // noticiaTitle2.className = 'text-center card-title pt-4 pl-2';
    // noticiaTitle2.textContent = dataText.articles[2].title;

    // const noticiaImagen2 = document.createElement('img');
    // noticiaImagen2.className = "card-img-top rounded mx-auto d-block";
    // noticiaImagen2.src = dataText.articles[2].image;
    

    // const noticiaResumen2 = document.createElement('p');
    // noticiaResumen2.className = 'text-justify p-2';
    // noticiaResumen2.textContent = dataText.articles[2].description;

    // const noticiaUrl2 = document.createElement('a');
    // noticiaUrl2.className = 'text-info text-decoration-none text-center p-2';
    // noticiaUrl2.href = dataText.articles[2].url;
    // noticiaUrl2.textContent="Noticia Completa"

    // //noticia0.appendChild(noticiaTitle);
    // noticia2.appendChild(noticiaTitle2);
    // noticia2.appendChild(noticiaImagen2);
    // noticia2.appendChild(noticiaResumen2);
    // noticia2.appendChild(noticiaUrl2);

    // const noticiaTitle3 = document.createElement('h2');
    // noticiaTitle3.className = 'text-center card-title pt-4 pl-2';
    // noticiaTitle3.textContent = dataText.articles[3].title;

    // const noticiaImagen3 = document.createElement('img');
    // noticiaImagen3.className = "card-img-top rounded mx-auto d-block";
    // noticiaImagen3.src = dataText.articles[3].image;
    

    // const noticiaResumen3 = document.createElement('p');
    // noticiaResumen3.className = 'text-justify p-2';
    // noticiaResumen3.textContent = dataText.articles[3].description;

    // const noticiaUrl3 = document.createElement('a');
    // noticiaUrl3.className = 'text-info text-decoration-none text-center p-2';
    // noticiaUrl3.href = dataText.articles[3].url;
    // noticiaUrl3.textContent="Noticia Completa"

    // //noticia0.appendChild(noticiaTitle);
    // noticia3.appendChild(noticiaTitle3);
    // noticia3.appendChild(noticiaImagen3);
    // noticia3.appendChild(noticiaResumen3);
    // noticia3.appendChild(noticiaUrl3);

    //https://stackoverflow.com/questions/32855524/javascript-for-loop-append-element-in-several-places

    var menu = document.querySelectorAll('#noticia');

    for (let key = 0; key<4; key++){
        const noticiaTitle = document.createElement('h2');
        noticiaTitle.className = 'card-title d-flex align-items-center text-center';
        noticiaTitle.textContent = dataText.articles[key].title;

        const noticiaImagen = document.createElement('img');
        noticiaImagen.className = "card-img-top rounded mx-auto d-block";
        noticiaImagen.src = dataText.articles[key].image;
        

        const noticiaResumen = document.createElement('p');
        noticiaResumen.className = 'text-justify p-2';
        noticiaResumen.textContent = dataText.articles[key].description;

        const noticiaUrl = document.createElement('a');
        noticiaUrl.className = 'text-info text-decoration-none text-center p-2';
        noticiaUrl.href = dataText.articles[key].url;
        noticiaUrl.textContent="Noticia Completa"


        menu[key].appendChild(noticiaTitle);
        menu[key].appendChild(noticiaImagen);
        menu[key].appendChild(noticiaResumen);
        menu[key].appendChild(noticiaUrl);

    }
}

// const app = new Vue({
//     el: '#app',
//     //viven todas las variables
//     data: {
//         titulo: "Tareas con Vue",
//         tareas: [], 

//     },
//     //metodos: logica de la aplicación
//     methods: {
//         agregarTarea(){
//             this.tareas.push({
//                 nombre: this.nuevaTarea,
//                 estado: false,
//             })
//             //console.log(this.nuevaTarea);
//             this.nuevaTarea= "";
//             localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
//         },
//         editarTarea(index){
//             console.log("editando...");
//             this.tareas[index].estado = true
//             localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
//         },
//         eliminarTarea(index){
//             console.log("editando...");
//             this.tareas.splice(index, 1);
//             localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
//         },
//     },

//     computed: {

//     },
//     // ejecutar algo en un momento determinado del ciclo de vue
//     beforeCreate(){

//     },
//     created(){
//         let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
//         if (datosDB === null){
//             this.tareas = [];
//         }else{
//             this.tareas = datosDB;
//         }
//     },
// })

