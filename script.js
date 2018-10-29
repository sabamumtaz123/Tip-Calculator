function calculateTip(){
    let billAmount= document.querySelector("#billAmount").value;
    let services=document.querySelector("#services").value;
    let numOfPeople=document.querySelector("#peopleAmount").value;

if(billAmount === ""|| services==0){
    alert("Please Enter Values");
    return;
}
if(numOfPeople==="" || numOfPeople<= 1){
    numOfPeople=1;
    document.querySelector("#each").style.display="none";
}else{
    document.querySelector("#each").style.display="block";
}

let total = (billAmount*services) / numOfPeople;
total =Math.round(total* 100)/100;
total = total.toFixed(2);

document.querySelector("#totalTip").style.display="block";
document.querySelector("#tip").innerHTML = total;
}

document.querySelector("#totalTip").style.display = "none";
document.querySelector("#each").style.display = "none";

document.querySelector("#calculate").onclick = function(){
    calculateTip();
};


































