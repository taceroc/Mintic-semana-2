Vue.component('inicial', {
    template: 
    `
    <div>    
        <h1>Hello, World!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quas repellendus? Voluptatem dolorum vitae vero sequi error corrupti rem, sapiente dolor recusandae ex optio harum omnis quod perferendis officiis totam!</p>
        <button>Click me</button>
    </div> 
    `
});


// crear instanciad de vue
//new Vue ({})
const app = new Vue({
    //hace referencia al id de div que se creo en html
    //elemento donde va a vivir vue "el"
    el: '#app',
    // data: viven variables
    data: {
      message: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima, voluptatum ipsa eos eaque nulla consectetur aliquam voluptates iure officiis quam doloribus quas nobis ipsam ut minus qui. Magni, rerum?',
      titulo: 'Intro con Vue',
      tareas: [
          {'nombre': 'tarea 1', 'estado': 'terminado'}
      ],
      contador: 0,
    },

    methods:{
        suma(){
            this.contador++;
            console.log(this.contador);
        }
    }
});



