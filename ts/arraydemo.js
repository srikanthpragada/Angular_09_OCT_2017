var marks = [60, 70, 45, 30, 66];
for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
    var m = marks_1[_i];
    if (m >= 50)
        console.log(m + " Passed");
    else
        console.log(m + " Failed");
}
marks.forEach(process);
function process(m, i, a) {
    if (m >= 50)
        console.log(m + " Passed");
    else
        console.log(m + " Failed");
}
marks.forEach(function (n, i, a) { return console.log(n >= 50 ? "Passed" : "Failed"); });
