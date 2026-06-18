export {};

console.log("====04 变量声明 =====");

// 1.命名规则，三种
let userName: string = "syxy";
let user_age: number = 18;
let $coursName: string = "ts";
console.log("(1) 命名规则 ->", userName, user_age, $coursName);

// 2.四种变量声明方式
console.log("(2) 变量声明的方式: ++++++++++++");
let siteTitle: string = "百度";
let siteTitle2: string;
let siteTitle3 = "百度1";  // 一般不建议
let siteTitle4;  /// 非常不建议
console.log("(2) 变量声明的方式: ", siteTitle, siteTitle2, siteTitle3, siteTitle4);

// 3.例子
console.log("(3) 综合例子: ++++++++++++");
let studentLabel: string = "小红";
let score1: number = 80;
let score2: number = 90;
let sum = score1 + score2;
console.log("(3) 综合例子: ", studentLabel, score1, score2, sum);

//4.类型断言
console.log("(4) 类型断言++++++++++++++++++++++++++++++");
let textValue: any = "123";
let assertedText: string = <string>textValue;
let assertedText2: string = textValue as string;
let realNumber: number = Number(assertedText2);
console.log("(4) 类型断言: ", assertedText, assertedText2, realNumber);
console.log("类型: ", typeof assertedText, typeof assertedText2, typeof realNumber);
console.log("..................................");
//5.