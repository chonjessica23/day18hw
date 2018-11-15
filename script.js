function totalP() {
    var nodelist = document.getElementsByTagName("P").length;
    document.getElementById("paragraph").innerHTML = nodelist;
    
    alert('There' + ' are ' + nodelist + ' paragraph' + ' tags' + ' in' + ' this' + ' page' + '.' );
}

totalButton = document.getElementById('button1');
totalButton.addEventListener('click', totalP);

function firstDivP(){
    var count1 = document.getElementById("div1").childElementCount;
    document.getElementById("paragraph").innerHTML = count1;
    
    alert('There' + ' are ' + count1 + ' paragraph' + ' tags' + ' in' + ' this' + ' first' + ' div' + '.' );
}

firstDivButton = document.getElementById('button2');
firstDivButton.addEventListener('click', firstDivP);

function secondDivP(){
    var count2 = document.getElementById("div2").childElementCount;
    document.getElementById("paragraph").innerHTML = count2;
    
    alert('There' + ' are ' + count2 + ' paragraph' + ' tags' + ' in' + ' this' + ' second' + ' div' + '.' );
}

secondDivButton = document.getElementById('button3');
secondDivButton.addEventListener('click', secondDivP);