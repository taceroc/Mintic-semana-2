

const testApi = async () =>{
    const resultText = await fetch(`https://newsapi.org/v2/top-headlines?country=co&X-Api-Key=d3110e11041c44ceaf7292bec160f5a8`, {method : 'GET'});
    
    
    // let resultJson;
    // if(resultText.ok){
    //     resultJson = await resultText.json();
    console.log(resultText.json());
    //     console.log(resultJson.Poster);
    //     printOnScreen(resultJson);
    // }
    // return resultJson;
}
testApi();

// var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=d3110e11041c44ceaf7292bec160f5a8';
// var req = new Request(url);
// fetch(req,{mode: "no-cors"})
//     .then(function(response) {
//         console.log(response.json());
//     });


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

