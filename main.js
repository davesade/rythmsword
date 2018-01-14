const width = 400;
const height = 600;
var partySize = width / 100;
var bossImg;
var imgs = [];
var heroes = [];

function preload() {

    imgs[0] = loadImage('./img/1.png');
    imgs[1] = loadImage('./img/2.png');
    imgs[2] = loadImage('./img/3.png');
    imgs[3] = loadImage('./img/4.png');
    imgs[4] = loadImage('./img/1.png');
    imgs[5] = loadImage('./img/2.png');
    imgs[6] = loadImage('./img/3.png');
    imgs[7] = loadImage('./img/4.png');
    bossImg = loadImage('./img/boss.png');

}

function setup() {
    createCanvas(width, height);

    boss = new Boss(0, height - 400);

    timeline = new Timeline(4);

    for (var i = 0; i < partySize; i++) {
        heroes[i] = new Hero(i * 100 + 25, height - 150, i);
    }

}

function draw() {
    background(0);

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
    //boss.x = mouseX - 200;

    var edge = false;

    if (boss.x > (width - boss.maxHealth) || boss.x < 0) {
        edge = true
    }

    if (edge) {
        boss.goBack();
    }

    timeline.show();
    timeline.move();

}

function keyTyped() {
    if (key === 'q') {
        console.log('aaa');
        if (timeline.x > heroes[0].x && timeline.x < (heroes[0].x + heroes[0].health)) {

            if (timeline.x > boss.x && timeline.x < (boss.x + boss.health)) {
                heroes[0].hit(boss.attack);
                console.log('Hero damaged!')
            } else {
                boss.hit(heroes[0].attack);
                console.log('Boss damaged!')
            }
        }
    } else if (key === 'w') {
        console.log('aaa');
        if (timeline.x > heroes[1].x && timeline.x < (heroes[1].x + heroes[1].health)) {

            if (timeline.x > boss.x && timeline.x < (boss.x + boss.health)) {
                heroes[1].hit(boss.attack);
                console.log('Hero damaged!')
            } else {
                boss.hit(heroes[1].attack);
                console.log('Boss damaged!')
            }
        }
    } else if (key === 'o') {
        console.log('aaa');
        if (timeline.x > heroes[2].x && timeline.x < (heroes[2].x + heroes[2].health)) {

            if (timeline.x > boss.x && timeline.x < (boss.x + boss.health)) {
                heroes[2].hit(boss.attack);
                console.log('Hero damaged!')
            } else {
                boss.hit(heroes[2].attack);
                console.log('Boss damaged!')
            }
        }
    } else if (key === 'p') {
        console.log('aaa');
        if (timeline.x > heroes[3].x && timeline.x < (heroes[3].x + heroes[3].health)) {

            if (timeline.x > boss.x && timeline.x < (boss.x + boss.health)) {
                heroes[3].hit(boss.attack);
                console.log('Hero damaged!')
            } else {
                boss.hit(heroes[3].attack);
                console.log('Boss damaged!')
            }
        }
    }
    return false
}

function keyReleased() {

}