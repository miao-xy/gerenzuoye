console.log("=======15_lets=======");
// 1 类的字段、构造函数、方法
class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    disp(): void {
        console.log("Engine is " + this.engine);
    }
}

// 2 创建实例化对象
let obj = new Car("szyy1");
console.log("发动机编号：" + obj.engine);
obj.disp();

// 3 类的继承
class Shape {
    Area: number;

    constructor(a: number) {
        this.Area = a;
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("圆的面积111是:" + this.Area);
    }
}

let obj1 = new Circle(223);
console.log("圆的面积222是:" + obj1.Area);
obj1.disp();

// 4 方法重写
class PrinterClass {
    doPrint(): void {
        console.log("父类的doPrint方法");
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint();
        console.log("子类的doPrint方法");
    }
}

new StringPrinter().doPrint();

// static 静态字段
class StaticNum {
    static num: number = 10;

    static printNum(): void {
        console.log("静态字段：" + StaticNum.num);
    }
}

StaticNum.printNum();

// instanceof 运算符
class Person {}
let person = new Person();
console.log("6 instanceof: ", person instanceof Person);