"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("==========10_shuzu==========");
// 数组声明与初始化
let sites = ["Google", "Runoob", "Taobao"];
let nums = [1, 2, 3, 4, 5];
console.log("1) sites: ", sites[2], nums[3]);
// Array对象创建数组
let arrNames = new Array(5);
for (let i = 0; i < arrNames.length; i++) {
    arrNames[i] = i * 2;
}
console.log("2) arrNames: ", arrNames);
// 数组解构
let arr = [100, 88];
let [a, b] = arr;
console.log("3) a: ", a, " b: ", b);
// 数组迭代
let ids = [1001, 1102, 1156];
for (let j in ids) {
    console.log("4) j: ", ids[j]);
}
for (let k of ids) {
    console.log("5) k: ", k);
}
// 多维数组
let multi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("6) multi: ", multi[2][2]);
console.log("7) multi: ", multi[1][1]);
// 数组作为函数参数和返回值
function disp(arrSites) {
    console.log("8) disp: ", arrSites.join(","));
}
function getSites() {
    return new Array("G", "Run", "Ta");
}
disp(sites);
console.log("9) getSites: ", getSites());
// 数组常用方法
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
console.log("10) concat: ", alpha.concat(numeric));
console.log("11) every: ", [12, 8, 1, 130, 44].every((item) => item >= 5));
console.log("12) filter: ", [12, 8, 5, 130, 44].filter((item) => item >= 10));
console.log("13) forEach: ", [7, 8, 9].forEach((value) => {
    console.log("13) forEach ->", value);
}));
console.log("14) indexOf: ", [1, 2, 3, 4, 5].indexOf(3));
console.log("15) join: ", [1, 2, 3, 4, 5].join("-"));
