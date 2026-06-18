"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====11 map对象=====");
// 1 创建map对象
let nameSiteMapping = new Map();
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Facebook", 2);
nameSiteMapping.set("Twitter", 3);
console.log("1) map -> ", nameSiteMapping);
//2 常用函数
console.log("2) get ->", nameSiteMapping.get("Google"));
console.log("2) has ->", nameSiteMapping.has("Facebook"));
console.log("2) delete ->", nameSiteMapping.delete("Twitter"));
console.log("2) delate之后 ->", nameSiteMapping);
console.log("3) size -> ", nameSiteMapping.size);
// 3 迭代
for (let key of nameSiteMapping.keys()) {
    console.log("3) key -> ", key);
}
for (let value of nameSiteMapping.values()) {
    console.log("3) value -> ", value);
}
for (let [key, value] of nameSiteMapping) {
    console.log("3) key, value -> ", key, value);
}
// 4 forEach
nameSiteMapping.forEach((value, key) => {
    console.log("4) forEach -> ", value, key);
});
// 5 clear
nameSiteMapping.clear();
console.log("5) clear ->", nameSiteMapping.size);
console.log("==============本章结束=============");
