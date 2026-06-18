"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("======条件语句=======");
// 1. 单if语句：判断是否成年
let age = 20;
if (age >= 18) {
    console.log("1) if -> 已成年");
}
// 2. if else语句：判断成绩是否通过（修正原代码重复的“通过”文案）
let score = 60;
if (score >= 60) { // 原代码写的50，按语义修正为60更合理
    console.log("2) if else -> 通过");
}
else {
    console.log("2) if else -> 未通过");
}
// 3. if else-if else语句：判断数字是正数/零/负数
let num = 0;
if (num > 0) {
    console.log("3) 正数");
}
else if (num === 0) { // 修正原代码多余空格
    console.log("3) 零");
}
else {
    console.log("3) 负数");
}
// 4. switch语句：根据等级判断成绩评级
let grade = "r";
switch (grade) {
    case "A":
        console.log("4) switch -> 优秀");
        break;
    case "B":
        console.log("4) switch -> 良好");
        break;
    case "C":
        console.log("4) switch -> 中等");
        break;
    default:
        console.log("4) switch -> 不及格");
        break;
}
console.log("======条件语句结束=======");
