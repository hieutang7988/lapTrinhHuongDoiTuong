let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.PI * Math.pow(radius,2);
    }
};
let circle = new Circle(2);
let radius = circle.getRadius();
let area =circle.getArea();
document.write("radius :" + radius + "<br>" + "area :" + area);



