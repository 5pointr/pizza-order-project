function getReceipt() {
    var text1="<h3>Your Order:<h3>";
    var text2="<h3>Charges:<h3>";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray=document.getElementsByClassName("size");
    for (var i=0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize=sizeArray[i].value;
            text1=text1+selectedSize+"<br>";
        }
    }
    if (selectedSize==="Personal Pizza") {
        sizeTotal=6;
    } else if (selectedSize==="Medium Pizza") {
        sizeTotal=10;
    } else if (selectedSize==="Large Pizza") {
        sizeTotal=14;
    } else if (selectedSize==="Extra Large Pizza") {
        sizeTotal=16;
    }
    text2=text2+"$"+sizeTotal+".00"+"<br>";
    runningTotal=sizeTotal;
    getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
    var meatTotal=0;
    var selectedMeat=[];
    var meatArray=document.getElementsByClassName("meat");
    for (var j=0; j<meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            text1=text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount=selectedMeat.length;
    if (meatCount>1) {
        meatTotal=(meatCount-1);
    } else {
        meatTotal=0;
    }
    if (meatCount>0) {
        text2=text2+"+$"+0+".00"+"<br>";
    }
    for (var a=0; a<(meatCount-1); a++)
        text2=text2+"+$"+1+".00"+"<br>";
    runningTotal=(runningTotal+meatTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML="<h3>Total: $"+runningTotal+".00"+"</h3>";
    getVeggies(runningTotal,text1,text2);
};

function getVeggies(runningTotal,text1,text2) {
    var veggiesTotal=0;
    var selectedVeggies=[];
    var veggiesArray=document.getElementsByClassName("veggies");
    for (var k=0; k<veggiesArray.length; k++) {
        if (veggiesArray[k].checked) {
            selectedVeggies.push(veggiesArray[k].value);
            text1=text1+veggiesArray[k].value+"<br>";
        }
    }
    var veggiesCount=selectedVeggies.length;
    if (veggiesCount>1) {
        veggiesTotal=(veggiesCount-1);
    } else {
        veggiesTotal=0;
    }
    if (veggiesCount>0) {
        text2=text2+"+$"+0+".00"+"<br>";
    }
    for (var b=0; b<(veggiesCount-1); b++)
        text2=text2+"+$"+1+".00"+"<br>";
    runningTotal=(runningTotal+veggiesTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML="<h3>Total: $"+runningTotal+".00"+"</h3>";
    getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
    var cheeseTotal=0;
    var selectedCheese=[];
    var cheeseArray=document.getElementsByClassName("cheese");
    for (var l=0; l<cheeseArray.length; l++) {
        if (cheeseArray[l].checked) {
            var selectedCheese=cheeseArray[l].value;
            text1=text1+selectedCheese+"<br>";
        }
    }
    if (selectedCheese==="Xtra Cheezy") {
        cheeseTotal=3;
    } else {
        cheeseTotal=0;
    }
    text2=text2+"+$"+cheeseTotal+".00"+"<br>";
    runningTotal=(runningTotal+cheeseTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML="<h3>Total: $"+runningTotal+".00"+"</h3>";
    getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
    var sauceTotal=0;
    var selectedSauce=[];
    var sauceArray=document.getElementsByClassName("sauce");
    for (var m=0; m<sauceArray.length; m++) {
        if (sauceArray[m].checked) {
            var selectedSauce=sauceArray[m].value;
            text1=text1+selectedSauce+"<br>";
        }
    }
    sauceTotal=0;
    text2=text2+"+$"+sauceTotal+".00"+"<br>";
    runningTotal=(runningTotal+sauceTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML="<h3>Total: $"+runningTotal+".00"+"</h3>";
    getCrust(runningTotal,text1,text2);
};

function getCrust(runningTotal,text1,text2) {
    var crustTotal=0;
    var selectedCrust=[];
    var crustArray=document.getElementsByClassName("crust");
    for (var n=0; n<crustArray.length; n++) {
        if (crustArray[n].checked) {
            var selectedCrust=crustArray[n].value;
            text1=text1+selectedCrust+"<br>";
        }
    }
    if (selectedCrust==="Cheez Stuft Crust") {
        crustTotal=3;
    } else {
        crustTotal=0;
    }
    text2=text2+"+$"+crustTotal+".00"+"<br>";
    runningTotal=(runningTotal+crustTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML="<h3>Total: $"+runningTotal+".00"+"</h3>";
};