// console.log("Hie")
// WAP to print even numbers from 1 to 50.

// for(let i=1; i<=50; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// WAP to count how many numbers between 1 to 100 are divisible by both 3 and 5.

// let count = 0;
// for(let i=1; i<=100;i++){
//     if(i%3 === 0 && i%5 === 0){
//         count++;
//     }
// }
// console.log(count);


// WAP to print the multiplication table of a given number using for loop.
const multi=(number)=>{
    console.log("Multiply");
    for (let i=1; i<=10;i++){
        console.log(`${number}x${i} = ${i*number}`);
    }
}

multi(5);


// WAP to print the sum of numbers from 1 to 100 using a while loop.


let sum = 0;
let i = 1;
while(i<=100){
    sum += i;
    i++;
}

console.log(sum);





