function Boss(x,y) {
    const maxHealth = 200;
    const minHealth = 150;
    this.maxHealth = maxHealth;
    this.attack = 20;

    this.x = x;
    this.xdir = 1;
    this.health = floor(random(minHealth, maxHealth));

    this.show = function() {
        image(bossImg, this.x, 0);
        noStroke();
        fill(255, 0, 0);
        rect(this.x, y, this.health, 10);
        stroke(255);
        noFill();
        rect(this.x, y, maxHealth, 10);
    };

    this.move = function() {
        this.x = this.x + this.xdir;
    };

    this.goBack = function() {
        this.xdir *= -1;
    };

    this.hit = function (damage) {
        this.health -= damage
    }
}