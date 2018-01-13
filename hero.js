function Hero(x,y){
    this.health = floor(random(50,100));

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(x, y, this.health / 2, 10);
    }
}