export interface IShape {
    draw(): void;
}

export class Circle implements IShape {
    public draw(): void {
        console.log("画一个圆形");
    }
}

export class Triangle implements IShape {
    public draw(): void {
        console.log("画一个三角形");
    }
}