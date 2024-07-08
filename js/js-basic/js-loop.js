for(let i=10;i>=1; i--){
    console.log(i);
}

//print even number no more than 10
for(let i=2;i<=10; i+=2){
    console.log(i);
}

//while loop when you don't know how many times you want to loop
let i=0;
while(true){
    if(i<10){
        console.log(i);
    }else {
        break;
    }
    i++;
}

//break, stop the loop when i=5
for(let i=0;i<10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}

//continue, skip i=5 and continue the loop
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

//continue in while loop
let ii=0;
while(ii<10){
    ii++;
    if(ii===5){
        continue;
    }
    console.log(ii);
}
