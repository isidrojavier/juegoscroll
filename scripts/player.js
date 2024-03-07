class Player{
    constructor(game){
        this.game = game;
        this.x = 50;
        this.y = 60;
        this.width = 200;
        this.height = 200;
    }

    //construyo el método del jugador que le dibuja
    //le voy a llamar draw por diferenciar
    draw(){
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //construyo el método update que hará que se mueva un pixel a la derecha
    update(){
        this.x++;
    }
}