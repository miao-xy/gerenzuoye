// 避免和同目录其他文件产生全局变量的冲突
export {};

console.log("=======03 基础类型 ===========");

// 1 基础类型: string | number | boolean
const studentName: string = "小王";
const age: number = 18;
const isStudent: boolean = true;
console.log("1) 基础类型: ", studentName, age, isStudent);

// 2 数组: 两种写法
const scores: number[] = [80, 90, 100];
const tags: Array<string> = ["前端", "Java", "Python"];
console.log("2) 数组: ", scores, tags);

// 3 元组: 固定长度 + 固定位置类型
const userInfo: [string, number] = ["小李", 60];
console.log("3) 元组: ", userInfo);

// 4 枚举: 用可读名称代替魔法数字
enum Level {
    Low,
    Mid,
    High
}
const currentLevel: Level = Level.Mid;
console.log("4) 枚举: ", currentLevel, Level[currentLevel]);
// 5 联合类型: 一个变量允许多个类型定义
let id: string | number;
id = "asdada";
console.log("(5) 联合类型(字符串):", id);
id = 999;
console.log("(5) 联合类型(数字):", id);

// 6: any和unkown对比
let looseValue: any = "avcc";
console.log("(6) any 初始 ->: ", looseValue);
looseValue = 123;
console.log("(6) any 赋值数字 ->: ", looseValue);

let safeValue: unknown = "hello";
if (typeof safeValue === "string") {
    console.log("(6) unknown 长度: ", safeValue.length);
}

// 7 void: 空, 函数只做事, 不返回结果
function printLine(text: string): void {
    console.log("(7) void函数:", text);
};
printLine("hello world");

// 8) null和undefined: 常见于"暂时没有值"
let nickName: string | undefined = undefined;
let remark: string | null = null;
console.log("(8) undefined: ", nickName);
console.log("(9) null:", remark);

// 9 object: 对象
const teacher: object = {
    name: "asda",
    course: "ts"
}
console.log("teacher", teacher);
// 10 类型断言：比编译器更清楚的使用
const maybeText: unknown = "hello world";
const textLength: number = (maybeText as string).length;
console.log("(10) 类型断言：", textLength);

// 11 字面量类型：值是只能几个固定选项之一
let resultText: "pass" | "fail" | "error";
resultText = "pass";
console.log("(11) 字面量类型：", resultText);

// 12 never：表示不会有返回结果
function fail(message: string): never {
    throw new Error(message);
}
console.log("(12) never --- fail 函数已定义，调用后会直接报错");

// 13 综合案例：接口 + 字面量类型 + 函数
interface Student {
    name: string;
    score: number;
}

function JudgeResult(score: number): "通过" | "挂科" {
    return score >= 60 ? "通过" : "挂科";
}

const stu: Student = {
    name: "小王as",
    score: 80
};

console.log("(13) 综合案例：", `${stu.name}的成绩${stu.score}：${JudgeResult(stu.score)}`);

