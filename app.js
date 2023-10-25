

for (let i = 1; i <= 99 ; i += 2)
{
    console.log(i);
}

for (let i = 0; i <= 100 ; i ++)
{
if(i % 2 ==0)
    {
    continue;

    }   
       
    else 
    {
    console.log(i);
    }
}


for (let i = 1; i <= 100 ; i ++)
{

    if(i % 2 == 0)
    {
        console.log(x);
    }

x++;

} while (x < 100);


for (let i = 1; i <= 100 ; i ++)
{

    let output = "";

    if(i % 3 == 0)
    {
        output == "FIZZ";
    }

    if(i % 5 == 0)
    {
        output == "BUZZ";
    }


    console.log(`${i} ${output}`);

} 

let numberToFind = Math.round(Math.random() * 500); // create number betwen 0 and 500
let n = Math.round(Math.random() *(500 -100)+100); //creates a random number

let foundValue;

for (let i = 1; i <= n ; i ++)
{

    

    if(i ==numberToFind)
    {
       foundValue = true; 
       break;       
}

if(foundValue)
{
console.log(`Did not find ${numberToFind} within 1-${n}..`);
}

else 
{
    console.log(`Did you not find ${numberToFind} within 1-${n}..`);
}


}


let fizzDivisor = Math.round(Math.random() * (10-1)+ 1);

let buzzDivisor = Math.round(Math.random() * (10-1)+ 1);

let end = Math.round(Math.random() * (1000-1)+ 1);

let start = Math.round(Math.random() * (10-1)+ 1);

for (let i = start; i <= end; i++)
{
    let output = "";
   
    if(i % fizzDivisor == 0)
        {
            output == "Fizz"
        }
    
        if(i % buzzDivisor == 0)
        {
            output == "Buzz"
        }   
    
    
    console.log(`${i} ${output} `);
}
