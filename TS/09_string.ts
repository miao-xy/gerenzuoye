export {};

console.log("=========09_string=========");
// 字符串字面量与字符串对象
let strLiteral: string = "hello world";
let strObject: String = new String("hello world");

// 类型检测与相等比较
console.log("1) typeof strLiteral:", typeof strLiteral);
console.log("2) typeof strObject:", typeof strObject);
console.log("3) === 比较: ", strLiteral === strObject);
console.log("4) == 比较: ", strLiteral == strObject);

// valueOf 方法比较
console.log("5) valueOf 后比较", strLiteral === strObject.valueOf());

// 长度属性
console.log("6) length: ", strLiteral.length);

// 字符串操作方法
let str: string = "hellosyxy syxy syxy";
console.log("7) charAt(8):", str.charAt(8));
console.log("8) indexOf('syxy'):", str.indexOf('syxy'));
console.log("9) substring(5, 10)", str.substring(5, 10));
console.log("10) slice(5, 8)", str.slice(5, 10));

// 字符串分割
let str1 = "Apples are round, and apples are juicy.";
let splitted = str1.split("p", 3);
console.log(splitted, "++++++++++++++++++");

// 其他字符串方法
let siteName: string = "sbxy";
console.log("11) concat ->", "asd".concat(siteName));
console.log("12) replace: ", "qqq".replace(/(\w+)\s(\w+)/, "$2 $1"));
console.log("13) toString: ", siteName.toString());
console.log("14) toUpperCase: ", siteName.toUpperCase());