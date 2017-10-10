var Employee = (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    return Employee;
}());
var e1 = new Employee("Abc", 10);
print(e1);
var p2 = { name: "Xyz", age: 20 };
print(p2);
function print(p) {
    console.log(p.name);
}
