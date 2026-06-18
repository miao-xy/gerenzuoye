"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("======14 接口 =========");
let customer = {
    firstName: "syxy",
    lastName: "shengbao",
    sayHi: () => "Helloasdadad",
};
console.log("1) 基础接口: ", customer.firstName, customer.lastName, customer.sayHi());
let options = { program: "text1", commandline: "hellllll" };
console.log("2) 联合类型: ", options.program, options.commandline);
options = { program: "text2", commandline: ["wewewsrdfs", "asdadsadsa"] };
if (Array.isArray(options.commandline)) {
    console.log("2) 联合类型: ", options.program, options.commandline[0], options.commandline[1]);
}
options = { program: "text3", commandline: () => "text3" };
if (typeof options.commandline === "function") {
    let result = options.commandline();
    console.log("2) 联合类型: ", options.program, result);
}
let names = ["qqq", "www", "eeee"];
console.log("3) 数组: ", names[0], names[1], names[2]);
let agelist = {};
agelist["runoob"] = 15;
agelist["google"] = 18;
console.log("4) 对象: ", agelist["runoob"], agelist["google"]);
let drummer = {
    age: 27,
    instrument: "drums",
};
console.log("5) 接口继承: ", drummer.age, drummer.instrument);
