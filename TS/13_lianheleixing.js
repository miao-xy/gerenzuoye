"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("============联合类型=============");
// 1.变量使用联合类型
let val;
val = "hello world";
console.log("1) 字符串为: " + val);
val = 123456;
console.log("2) 数字为: " + val);
// val = true; 会报错
// 2.联合类型作为函数参数
function disp(name) {
    if (typeof name === "string") {
        console.log("2) 字符串参数: ", name);
    }
    else {
        for (let i = 0; i < name.length; i++) {
            console.log("2) 数组参数: ", name[i]);
        }
    }
}
disp("syxy");
disp(["Runoob", "Google", "Taobao11111"]);
// 3.联合类型数组
let arr;
arr = [1, 2, 3, 4];
console.log("3) 数字数组为: ", arr);
arr = ["asdad", "asdadasasdad", "qweqeqwdad"];
console.log("3) 字符串数组为: ", arr);
console.log("==============本章结束================");
