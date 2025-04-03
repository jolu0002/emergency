document.querySelector("#circle1").addEventListener("mouseover", stearinHighlight);
document.querySelector("#circle1").addEventListener("mouseout", stearinUnHighlight);

function stearinHighlight() {
    console.log(stearinHighlight);
    document.querySelector("#circle1").style.fill = "darkred";
}
function stearinUnHighlight() {
    console.log(stearinUnHighlight);
    document.querySelector("#circle1").style.fill = "red";
}
 
document.querySelector("#circle2").addEventListener("mouseover", kaffeHighlight);
document.querySelector("#circle2").addEventListener("mouseout", kaffeUnHighlight);

function kaffeHighlight() {
    console.log(stearinHighlight);
    document.querySelector("#circle2").style.fill = "darkred";
}
function kaffeUnHighlight() {
    console.log(stearinUnHighlight);
    document.querySelector("#circle2").style.fill = "red";
}

document.querySelector("#circle3").addEventListener("mouseover", vinHighlight);
document.querySelector("#circle3").addEventListener("mouseout", vinUnHighlight);

function vinHighlight() {
    console.log(stearinHighlight);
    document.querySelector("#circle3").style.fill = "darkred";
}
function vinUnHighlight() {
    console.log(stearinUnHighlight);
    document.querySelector("#circle3").style.fill = "red";
}
document.querySelector("#circle4").addEventListener("mouseover", olieHighlight);
document.querySelector("#circle4").addEventListener("mouseout", olieUnHighlight);

function olieHighlight() {
    console.log(stearinHighlight);
    document.querySelector("#circle4").style.fill = "darkred";
}
function olieUnHighlight() {
    console.log(stearinUnHighlight);
    document.querySelector("#circle4").style.fill = "red";
}