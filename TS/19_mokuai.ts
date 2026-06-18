import { IShape, Circle, Triangle } from "./19_mokuai_shapes";

console.log("=======19 模块========");

function drawAllShapes(shape: IShape): void {
    shape.draw();
}

drawAllShapes(new Circle());
drawAllShapes(new Triangle());

console.log("=======19 模块========");