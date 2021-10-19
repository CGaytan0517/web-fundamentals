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
