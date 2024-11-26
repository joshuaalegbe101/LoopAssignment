//Loopy
for(let i = 0; i < 101; i++){
    if (i % 3 == 0 && i % 5 ==0)
        console.log("Fizz Buzz");

    else if(i % 3 == 0)
        console.log("Fizz");

    else if(i % 5 == 0)
        console.log("Buzz");

    else
        console.log(i);
}


let n = 9;

do{
    n++;
}
while(n % 2 == 0 || n % 3 == 0 || n % 5 == 0)

console.log("The prime number is: " + String(n));


