export {};
console.log("=============12元组=============");
// 声明元组
let mytuple: [number, string] = [42, "hello"];
console.log("1) mytuple: ", mytuple);

// 访问元组
let mytuple2: [number, string, boolean] = [55, "asdads", true];
console.log("2) mytuple2: ", mytuple2[0], mytuple2[1], mytuple2[2]);

// 更新元组
console.log("3) mytuple2更新前: ", mytuple2[0]);
mytuple2[0] = 989898;
console.log("3) mytuple2更新后: ", mytuple2[0]);

// 元组运算
let mytuple3: [number, string, boolean] = [4221, "hesadadllo", false];
console.log("4) mytuple3: ", mytuple3.length);
mytuple3.push("qwqwqw");
console.log("4) mytuple3push之后: ", mytuple3);
let lastEle = mytuple3.pop();
console.log("4) mytuple3pop之后: ", mytuple3, lastEle);

// 结构运算
let a: [number, string, boolean] = [1, "helloadsdsa", true];
let [b, c] = a;
console.log("5) a: ", a, "b: ", b, "c: ", c);
// 函数返回元组
function getUserInfo(): [number, string] {
    return [42222, "helladsadao"];
  }
  
  const [userId, username] = getUserInfo();
  console.log("6) 返回元组: userId: ", userId, "username: ", username);