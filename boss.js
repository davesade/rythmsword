function Boss(x,y) {

    this.x = x;
    this.xdir = 1;
    this.health = 300;

    this.show = function() {
        image(bossImg, 0, 0);
        fill(255);
        rectMode(CENTER);
        rect(this.x, y, width / 2, 10);
    };

    this.move = function() {
        this.x = this.x + this.xdir;
    };

    this.goBack = function() {
        this.xdir *= -1;
    }
}