document.querySelector("#circle1").addEventListener("mouseover", stearinHighlight);
document.querySelector("#circle1").addEventListener("mouseout", stearinUnHighlight);
document.querySelector("#circle1").addEventListener("click", stearinInfo);

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
document.querySelector("#circle2").addEventListener("click", kaffeInfo);
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
document.querySelector("#circle3").addEventListener("click", vinInfo);

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
document.querySelector("#circle4").addEventListener("mouseout", olieInfo);
function olieHighlight() {
    console.log(stearinHighlight);
    document.querySelector("#circle4").style.fill = "darkred";
}
function olieUnHighlight() {
    console.log(stearinUnHighlight);
    document.querySelector("#circle4").style.fill = "red";
}

function vinInfo() {
    console.log("vinInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "Rødvinsplet";
    document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Afhukning er supereffektivt og et af de bedste passificeringsaktiviteter man kan bruge. Også for zombier!</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver en del styrke og træning at hugge hovedet af en zombie.</p>";
  }
  function stearinInfo() {
    console.log("stearinInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "Stearin";
    document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Det er rimelig nyttigt at hugge en arm af en zombie, og skal man gøre det, er skulderen et godt sted at hugge på.";
    document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Hvis du kan svinge et scærd (helst en katana), så er det rimelig let.</p>";
  }
  function kaffeInfo() {
    console.log("kaffeInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "Kaffe";
    document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
    document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Ikke super effektivt, da en zombie allerede er langsom, så man får ikke så meget ud af at forstyrre dens balance.";
    document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver ikke så meget. Det kan gøres med en træpind.</p>";
  }
  function olieInfo() {
    console.log("olieInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "Olie";
    document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
    document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Ikke super effektivt, da en zombie allerede er langsom, så man får ikke så meget ud af at forstyrre dens balance.";
    document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver ikke så meget. Det kan gøres med en træpind.</p>";
  }


  function animateBoxes() {
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");
    document.querySelector("#requirement").addEventListener("animationend", cleanup);
  }
  
  function cleanup() {
    console.log("cleanup");
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);
    document.querySelector("#efficiency").classList.remove("fadeIn");
    document.querySelector("#requirement").classList.remove("fadeIn");
  }