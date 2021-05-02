let balls = [];
let gravDir = 1;

function setup() {
    createCanvas(500, 600);

}

function draw() {
    background(30);
    if (!(mouseX == 0 && mouseY == 0)){
    balls.push(new Ball(mouseX, mouseY, gravDir));
        for (let ball of balls) {
            ball.move();
            ball.render();
        }

        if (balls.length > 250) {
            balls.splice(0, 1);
        }
        // console.log(balls.length);
        // console.log(frameRate());
        // console.log(gravDir);
    }
}


function mousePressed() {
    gravDir *= -1;
}
