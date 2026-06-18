// ts文件可以分成：配置区，类型区，数据区，函数区，逻辑区，输出区
// 1.配置区（固定值）
const projectTitle = "成绩判断示例";
const passScore = 60;
// 3.数据区（具体数据）
const s1 = { name: "张三", score: 86 };
const s2 = { name: "李四", score: 59 };
const students = [s1, s2];
// 4.函数区（具体功能以及可复用的逻辑）
// 普通函数(判断通没通过函数)：明确参数类型与返回值类型
function judge(student, line) {
    return student.score >= line ? "通过" : "未通过";
}
// 箭头函数（结果显示函数）：写法简洁
const formatResult = (student, result) => {
    return `${student.name}的成绩${student.score}: ${result}`;
};
// 5.类区
class ReportPrinter {
    constructor(title) {
        this.title = title;
    }
    printHeader() {
        console.log("项目: " + this.title);
    }
    printLine(text) {
        console.log("---------------------------------------------");
        console.log(text);
    }
}
//6.逻辑区
const resultList = students.map((student) => {
    return judge(student, passScore);
});
// 7.输出区
const printer = new ReportPrinter(projectTitle);
printer.printHeader();
students.forEach((student, index) => {
    const line = formatResult(student, resultList[index]);
    printer.printLine(line);
});
