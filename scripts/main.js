class Game{
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}

//no se ejecutará nada hasta que se haya cargado todo, así evitamos errores
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    
    //preparamos el contexto para hacer el dibujo en canvas
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
});