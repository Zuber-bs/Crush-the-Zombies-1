class Stone {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, this.r);
        World.add(world, this.body);
    }

    display() {
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.r * 2, this.r * 2);
    }
}