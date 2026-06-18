"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=====16duixiang====");
// 1.对象字面量
let sites = {
    site1: "Googasasle",
    site2: "Runoasasob",
    site3: "Taobaassaso"
};
console.log("1对象属性:", sites.site1, sites.site2, sites.site3);
// 2对象类型模板
let siteObj = {
    site1: "Google",
    site2: "Runoob",
    sayHello: function () {
        console.log("Hello Worrsssld!");
    }
};
siteObj.sayHello();
//3 对象作为函数参数
let invokeSites = function (obj) {
    console.log("3对象属性:", obj.site1, obj.site2);
};
invokeSites(siteObj);
function addPoints(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
}
let newPoint = addPoints({ x: 12, y: 22 }, { x: 233, y: 333 });
console.log("4鸭子类型", newPoint.x, newPoint.y);
