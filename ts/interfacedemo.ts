interface Person
{
    name : string;
    age : number;
}

class Employee implements Person 
{
    name : string;
    age : number;

    constructor(n : string, a : number) {
        this.name = n;
        this.age = a;
    }

}

var e1 : Employee  = new Employee("Abc",10);
print(e1);

var  p2 = { name : "Xyz", age : 20};
print(p2);


function print(p : Person) 
{
    console.log(p.name);
}

