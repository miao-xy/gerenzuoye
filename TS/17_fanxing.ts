export { };
console.log("====17 泛型====");

// 1) 泛型函数
function identity<T>(arg: T): T {
    return arg;
}
console.log("1) 泛型函数 ->", identity<string>("Hello"));
console.log("1) 泛型函数 ->", identity<number>(123));

// 2) 泛型接口
interface Pair<T, U> {
    first: T;
    second: U;
}
let pair: Pair<string, number> = { first: "hhhhh", second: 5555 };
console.log("2) 泛型接口 ->", pair.first, pair.second);

// 3) 泛型类
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
let stringBox = new Box<string>("tststst");
console.log("3) 泛型类 ->", stringBox.getValue());

// 4) 泛型约束
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log("(4) 泛型约束 ->", arg.length);
}

logLength("Helloaaaaaaaaaa");

// 5) 泛型默认值
function defaultValue<T = string>(arg: T): T {
    return arg;
}
console.log("(5) 泛型默认值 ->", defaultValue<number>(1221213));
console.log("(5) 泛型默认值 ->", defaultValue("Hel"));