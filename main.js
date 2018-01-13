const width = 400;
const height = 600;
const partySize = width / 100;
var bossImg;

heroes = [];

function preload() {
    //img = loadImage('./img/fighter.png');
    bossImg = loadImage('./img/boss.png');

}

function setup() {
    createCanvas(width, height);

    boss = new Boss(width / 2, height - 400);

    timeline = new Timeline(4);

    for (var i = 0; i < partySize; i++) {
        heroes[i] = new Hero(i*100+50, height - 50);
        console.log(heroes[i].health);
    }

}

function draw() {
    background(0);

    timeline.show();
    timeline.move();
    var timelineEdge = false;
    if (timeline.x > width || timeline.x < 0) {
        timelineEdge = true;
    }
    if (timelineEdge) {
        timeline.goBack()
    }

    for (var i = 0; i < heroes.length; i++) {
        heroes[i].show();
    }

    boss.show();
    boss.move();
    var edge = false;

    if (boss.x > width - 50 || boss.x < 50){
        edge = true
    }

    if (edge) {
        boss.goBack();
    }
}

function keyPressed() {

}

function keyReleased() {

}