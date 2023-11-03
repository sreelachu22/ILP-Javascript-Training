for(let index=0;index<20;index++){
    if(index%2==0) continue;
    else if(index%3==0 && index%5==0) break;
    else if(index%3==0) console.log(index + " is divisible by 3");
    else if(index%5==0) console.log(index + " is divisible by 5")
}