function add(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
function print(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var n_1 = names_1[_a];
        console.log(message + " " + n_1);
    }
}
function f1(x) {
    if (typeof (x) == "string")
        console.log(x.length);
    else
        console.log(x);
}
f1(10);
f1("Abc");
var IsEven = function (n) { return n % 2 == 0 ? true : false; };
console.log(IsEven(11));
// function IsEven(n : number) {
//     return n % 2 == 0 ? n + 2 : n + 1;
// }
// console.log( add(10,20));
// console.log( add(10));
// print("Hello", "Steve","Scott","Anders");
