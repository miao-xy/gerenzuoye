console.log("(1) 程序从上而下执行");
console.log("先执行第一行");
console.log("再执行第二行");
console.log("\n(2) 变量与类型");
// let: 可以重新赋值，适合"后续会变化"的数据
let age = 18;
age = 19;
console.log("age:", age);
// const: 声明后不能重新赋值，适合"不会变化"的数据
const PI = 3.14;
const studentName = "张三";
const isStudent = true;
console.log("姓名: " + studentName);
console.log("年龄: " + age);
console.log("是否是学生: " + isStudent);
console.log("\n(3) 基本运算");
const a = 10;
const b = 20;
console.log("a * b = " + a * b);
console.log("\n(4) 条件语句");
if (age >= 18) {
    console.log("已成年");
}
else {
    console.log("未成年");
}
console.log("\n(5) 函数基础");
function add(x, y) {
    return x + y;
}
console.log("add(100, 2000) = " + add(100, 2000));
console.log("\n6) 注释与分号");
console.log("// 这是单行注释");
/*
这是多行注释
*/
console.log("; 表示语句的结束");
console.log("\n7) 大小写敏感");
const userName = "张三211";
const username = "李四22222";
console.log("userName = " + userName);
console.log("username = " + username);
console.log("\n8) 类与对象");
class Site {
    name() {
        console.log("syxy");
    }
}
const siteObj = new Site();
siteObj.name();
console.log("++++++++++++++++++++++++");
