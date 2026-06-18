/// <reference path="20_calc.d.ts" />

declare function require(module: string): any;

require("./20_calcThirdPartyJsLib.js");

console.log("========20 声明文件========");

let obj = new Runoob.Calc();
console.log("100以内的和是:", obj.doSum(100));

console.log("========20 声明文件========");