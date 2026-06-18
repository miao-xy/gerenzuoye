export { };
console.log("====06循环语句====");

// for循环:适合已知循环次数的循环
let total: number = 0;
for (let i: number = 1; i <= 3; i++) {
    total += i;
}
console.log("(1) for循环 ->", total);

// while循环: 先判断, 再执行
let count: number = 2;
while (count > 0) {
    console.log("(2) while循环 ->", count);
    count--;
}

// do-while循环: 先执行一次, 再判断
let num: number = 0;
do {
    console.log("(3) do-while循环 ->", num);
    num++;
} while (num < 2);

// for--in和for--of: for----in 遍历对象, for----of 遍历数组
let user = { name: "sada", age: 20 };
for (let key in user) {
    console.log("(4) for--in ->", key, user[key]);
}

let courseList: string[] = ["Java", "Python", "C++"];
for (let course of courseList) {
    console.log("(4) for-of ->", course);
}

// forEach,every,some, forEach适合遍历数组, every适合判断数组中的所有元素是否满足条件(有一个满足就是true),
// some适合判断数组中是否存在满足条件的元素(全都不满足才可以, 满足一个就是true)
let numList: number[] = [-1, 2, -3, -4, -5];
numList.forEach((item) => {
    console.log("(5) forEach ->", item);
});

let everyResult: boolean = numList.every((item) => item > 0);
console.log("(5) every ->", everyResult);

let someResult: boolean = numList.some((item) => {
    return item > 3;
});
console.log("(5) some ->", someResult);

// break和continue
for (let n: number = 1; n <= 5; n++) {
    if (n === 2) {
        continue;
    }
    if (n === 4) {
        break;
    }
    console.log("(6) break和continue ->", n);
}

console.log("======本章结束========");