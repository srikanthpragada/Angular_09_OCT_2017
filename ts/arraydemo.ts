var marks: number[] = [60, 70,45, 30,66];


for(let m of marks)
{
 if ( m >= 50)
   console.log(m + " Passed");
 else
   console.log(m + " Failed");
}


marks.forEach(process);

function process(m:number, i:number, a: number[]) 
{
 if (m >= 50)
   console.log(m + " Passed");
 else
   console.log(m + " Failed");
}


marks.forEach((n,i,a) => console.log( n >= 50 ? "Passed" : "Failed"));
