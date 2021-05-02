class Ball {
    constructor(xPos, yPos, gravDir) {
        this.r = random(5, 10);
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = random(-1.1, 1.1);
        if(gravDir > 0) {
            this.yVel = random(0, -2);

        }else {
            this.yVel = random(0, 1);

        }
        this.yAcc = 0.05 * gravDir;
        
        // this.colours = ["#F94144", "#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1"]
        // this.colours = ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"]
        this.colours = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
        this.index = floor(random(0, this.colours.length));
        this.colour = this.colours[this.index];
    }

    move() {
        
        this.yVel += this.yAcc;
        this.xPos += this.xVel
        this.yPos += this.yVel

    }

    render() {
        noStroke();
        fill(this.colour);
        ellipse(this.xPos, this.yPos, this.r);

    }
}