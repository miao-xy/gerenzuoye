globalThis.Runoob = globalThis.Runoob || {};

globalThis.Runoob.Calc = class {
    doSum(limit) {
        let sum = 0;
        for (let i = 0; i < limit; i++) {
            sum += i;
        }
        return sum;
    }
}