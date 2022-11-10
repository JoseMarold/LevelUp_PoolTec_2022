

function Decrease(){
    var number = parseInt(document.getElementById("Number").innerText);
    number = number - 1;
    document.getElementById("Number").innerHTML = number;
    SetColor(number);
}

function Increase(){
    var number = parseInt(document.getElementById("Number").innerText);
    number = number + 1;
    document.getElementById("Number").innerHTML = number;
    SetColor(number);
}

function Reset(){
    document.getElementById("Number").innerHTML = 0;
    SetColor(0);
}

function SetColor(number){
    if (number > 0)
        document.getElementById("Number").style.color = "Green";
    else if (number < 0)
        document.getElementById("Number").style.color = "Red";
    else
        document.getElementById("Number").style.color = "Black";
}