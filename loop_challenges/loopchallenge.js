//Challenge 1
for (var odd=1; odd<21; odd++) {
    if (odd % 2 ==0)
    console.log("")
    else console.log (odd)
}

//Challenge 2
for (var div3 =100; div3 >-1; div3--){
    if (div3 %3==0)
    console.log(div3)
}

//Challenge 3
for (var i=4; i>-4; i-=1.5){
    if (i > -4)
    console.log(i)
}

//Challenge 4
sum=0
for (var add=1; add<=100; add++){
    console.log(add)
    if (add < 100)
    console.log("+")
    if (add <= 100){
        sum=sum+add
    }
}console.log(sum)

//Challenge 5
product=1
for (var times=1; times<=12; times++){
    console.log(times)
    if (times <12)
    console.log("*")
    if(times <=12){
        product=product*times
    }
}console.log(product)

// WALKTHROUGH ANSWERS

//Challenge 1
for(var i=1; i<20; i+=2) {
    console.log(i);
}

//Challenge 2
for(var i=100; i>-1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

//Challenge 3
for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}

//Challenge 4
var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

//Challenge 5
var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);