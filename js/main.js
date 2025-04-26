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
    document.querySelector(".info-text > article > p").textContent = "At fjerne rødvinsplet kan være en udfordring, men med de rigtige metoder kan du ofte fjerne dem effektivt. Her er en kort guide:";
    document.querySelector("#efficiency").innerHTML = "<h3>Tekstil</h3><p>Salt: Dæk pletten med salt og lad det stå i 5-10 minutter. Børst det bort.</p><p>Varmt vand: Skyl med varmt vand fra bagsiden.</p><p>Husholdningseddike: Bland med vand og anvend på pletten. Vask derefter.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Tips</h3><p>Test Først: Test rensemidlet på en skjult del. Undgå Varme og få professionel hjælp ved kæmpe eller svære pletter.</p>";
  }
  function stearinInfo() {
    console.log("stearinInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "Stearin";
    document.querySelector(".info-text > article > p").textContent = "At fjerne stearinpletter kan være en let opgave med de rigtige metoder. Her er en kort guide til, hvordan du kan fjerne stearinpletter fra forskellige overflader:";
    document.querySelector("#efficiency").innerHTML = "<h3>Tekstil</h3><p>Afkøl: Lad stearinen hærde først.</p><p>Skrab: Skrab let over pletten med en kniv eller et kreditkort for at fjerne det meste af stearinen.</p><p> Læg så et stykke brunt papir eller et tørklæde over pletten og varm det op med et varmt strygejern. Stearinen vil smelte og blive absorberet af papiret.";
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