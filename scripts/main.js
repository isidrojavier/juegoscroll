class Game{
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.player = new Player(this);
    }

    render(){
        //dibujo un rectángulo
        this.ctx.fillStyle = 'red';
        //Una vez creado la clase player con el renderizado, podemos llamarlo
        //en vez de ponerlo directamente aquí
        //this.ctx.fillRect(100,200,350,150);
        this.player.draw();
        this.player.update();
    }
}

//no se ejecutará nada hasta que se haya cargado todo, así evitamos errores
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    
    //preparamos el contexto para hacer el dibujo en canvas
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    //instanciamos la clase Game, que llamará a su constructor
    //como vemos el constructor necesita dos variables que son el canvas y el contexto
    const game = new Game(canvas, ctx);

    /*creamos la ilusión del movimiento para ello debemos crear una función animate
    que lo que va a hacer es entrar una recursividad de llamada a la función
    para dibujar y actualizar*/

    //y probamos que dibuja el rectángulo
    function animate(){
        //si no pongo esta línea, el rectángulo viejo no se borra
        // y hace como una especie de barra de estado
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});