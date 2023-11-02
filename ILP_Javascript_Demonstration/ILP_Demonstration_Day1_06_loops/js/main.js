//! LOOPS

//while loop

// let count=0;
// let currentRoll =  0;
// console.log(currentRoll)
// while(currentRoll!=6){
//     currentRoll= Math.floor(Math.random()* 6) + 1
//     count++;
// }
// console.log("Number of times dice rolled to get "+currentRoll+" : "+count)


// let currentRoll= Math.floor(Math.random()* 100) + 1
// console.log("starting number is : "+currentRoll)
// do{
//     if(currentRoll%2 == 0){
//         currentRoll /= 2;
//     }
//     else {
//         currentRoll *= 3
//         currentRoll = currentRoll+1
//     } 
//     console.log(currentRoll)
// }while(currentRoll!=1)

for(let index=0;index<20;index++){
    if(index%2==0) continue;
    else if(index%3==0) console.log(index + " is divisible by 3");
    else if(index%5==0) console.log(index + " is divisible by 5");
    else if(index%3==0 && index%5==0) break;
}