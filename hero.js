function Hero(x,y, index){

    const maxHealth = 50;
    const minHealth = 25;
    this.attack = 10;
    this.health = floor(random(minHealth, maxHealth));
    this.x = x;
    this.show = function() {
        noStroke();
        fill(255,0,0);
        rect(this.x, y, this.health, 10);
        noFill();
        stroke(255);
        rect(this.x, y, maxHealth, 10);
        image(imgs[index], x, height - 100);
    };

    this.hit = function(damage) {
        this.health -= damage
    }
}