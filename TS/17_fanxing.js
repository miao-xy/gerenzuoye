"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====17 泛型====");
// 1) 泛型函数
function identity(arg) {
    return arg;
}
console.log("1) 泛型函数 ->", identity("Hello"));
console.log("1) 泛型函数 ->", identity(123));
let pair = { first: "hhhhh", second: 5555 };
console.log("2) 泛型接口 ->", pair.first, pair.second);
// 3) 泛型类
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let stringBox = new Box("tststst");
console.log("3) 泛型类 ->", stringBox.getValue());
function logLength(arg) {
    console.log("(4) 泛型约束 ->", arg.length);
}
logLength("Helloaaaaaaaaaa");
// 5) 泛型默认值
function defaultValue(arg) {
    return arg;
}
console.log("(5) 泛型默认值 ->", defaultValue(1221213));
console.log("(5) 泛型默认值 ->", defaultValue("Hel"));
