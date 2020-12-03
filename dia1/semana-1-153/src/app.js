
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
    
    const noticiaTitle = document.createElement('h2');
    noticiaTitle.className = 'text-center card-title pt-4 pl-2';
    noticiaTitle.textContent = dataText.articles[0].title;

    const noticiaImagen = document.createElement('img');
    noticiaImagen.className = "card-img-top rounded mx-auto d-block";
    noticiaImagen.src = dataText.articles[0].image;
    

    const noticiaResumen = document.createElement('p');
    noticiaResumen.className = 'text-justify p-2';
    noticiaResumen.textContent = dataText.articles[0].description;

    const noticiaUrl = document.createElement('a');
    noticiaUrl.className = 'text-info text-decoration-none text-center p-2';
    noticiaUrl.href = dataText.articles[0].url;
    noticiaUrl.textContent="Noticia Completa"

    //noticia0.appendChild(noticiaTitle);
    noticia0.appendChild(noticiaTitle);
    noticia0.appendChild(noticiaImagen);
    noticia0.appendChild(noticiaResumen);
    noticia0.appendChild(noticiaUrl);

    //https://stackoverflow.com/questions/32855524/javascript-for-loop-append-element-in-several-places

    for (let key = 1; key<4; key++){
        const noticiaTitle = document.createElement('h2');
        noticiaTitle.className = 'text-center card-title pt-4 pl-2';
        noticiaTitle.textContent = dataText.articles[key].title;

        const noticiaImagen = document.createElement('img');
        noticiaImagen.className = "card-img-top";
        noticiaImagen.src = dataText.articles[key].image;
        

        const noticiaResumen = document.createElement('p');
        noticiaResumen.className = 'text-justify p-2';
        noticiaResumen.textContent = dataText.articles[key].description;

        const noticiaUrl = document.createElement('a');
        noticiaUrl.className = 'text-info text-decoration-none text-center p-2';
        noticiaUrl.href = dataText.articles[key].url;
        noticiaUrl.textContent="Noticia Completa"

        const a = "noticia"+"key";

        a.appendChild(noticiaTitle);
        a.appendChild(noticiaImagen);
        a.appendChild(noticiaResumen);
        a.appendChild(noticiaUrl);

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

