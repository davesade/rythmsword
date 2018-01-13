function Timeline(speed) {
    this.speed = speed;
    this.x = 0;

    this.show = function() {
        stroke(255);
        line(this.x, 0, this.x, height);
    };

    this.move = function() {
        this.x = this.x + this.speed;
    };

    this.goBack = function() {
        this.speed *= -1;
    }
}