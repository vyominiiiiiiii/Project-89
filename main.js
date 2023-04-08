var num1=-4;
var num2=50;
var num3=-50;

if(num1>0){
    console.log(num1+" is a positive number");
    if(num1>num2){
        console.log(num1+" is greater than "+num2);
    }
    else if(num1===num2){
        console.log(num1+" is equal to "+num2);
    }
    else{
        console.log(num1+" is less than 50");
    }
}

else if(num1===0){
    console.log(num1+" is equal to 0");
}

else{
    console.log(num1+" is a negative number")
    if(num1<num3){
        console.log(num1+" is less than "+num2);
    }
    else if(num1===num3){
        console.log(num1+" is equal to "+num3);
    }
    else{
        console.log(num1+" is greater than "+num3);
    }
}