function add ( n1: number, n2 : number = 0) : number 
{
     return n1 + n2;
}

function print( message : string , ... names : string[])
{
   for(let n of names)
      console.log( message + " " + n);
}

function f1(x:string): void;
function f1(x:number): void

function f1(x : any)
{
     if (typeof(x) == "string" )
       console.log(x.length);
     else
       console.log(x);
}

f1(10);
f1("Abc");

var IsEven = (n : number) => n % 2 == 0 ? true : false;

console.log( IsEven(11));

// function IsEven(n : number) {
//     return n % 2 == 0 ? n + 2 : n + 1;
// }

// console.log( add(10,20));
// console.log( add(10));

// print("Hello", "Steve","Scott","Anders");
