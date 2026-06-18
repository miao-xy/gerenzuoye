"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====06循环语句====");
// for循环:适合已知循环次数的循环
let total = 0;
for (let i = 1; i <= 3; i++) {
    total += i;
}
console.log("(1) for循环 ->", total);
// while循环: 先判断, 再执行
let count = 2;
while (count > 0) {
    console.log("(2) while循环 ->", count);
    count--;
}
// do-while循环: 先执行一次, 再判断
let num = 0;
do {
    console.log("(3) do-while循环 ->", num);
    num++;
} while (num < 2);
// for--in和for--of: for----in 遍历对象, for----of 遍历数组
let user = { name: "sada", age: 20 };
for (let key in user) {
    console.log("(4) for--in ->", key, user[key]);
}
let courseList = ["Java", "Python", "C++"];
for (let course of courseList) {
    console.log("(4) for-of ->", course);
}
// forEach,every,some, forEach适合遍历数组, every适合判断数组中的所有元素是否满足条件(有一个满足就是true),
// some适合判断数组中是否存在满足条件的元素(全都不满足才可以, 满足一个就是true)
let numList = [-1, 2, -3, -4, -5];
numList.forEach((item) => {
    console.log("(5) forEach ->", item);
});
let everyResult = numList.every((item) => item > 0);
console.log("(5) every ->", everyResult);
let someResult = numList.some((item) => {
    return item > 3;
});
console.log("(5) some ->", someResult);
// break和continue
for (let n = 1; n <= 5; n++) {
    if (n === 2) {
        continue;
    }
    if (n === 4) {
        break;
    }
    console.log("(6) break和continue ->", n);
}
console.log("======本章结束========");
