const css = document.querySelector("#colormode");
console.log(css.href);
const btn = document.querySelector("#switchBtn");
btn.addEventListener("click", changeMode);
const switchtext = document.querySelector("#switchtext");

function changeMode (){
    if (css.href.includes("css/customlight.css")
    ) {
    css.href = "css/customdark.css";
    switchtext.textContent = "Light mode";
    console.log(css.href);
}
else {
    css.href = "css/customlight.css";
    switchtext.textContent = "Dark mode";
    console.log(css.href);
}
}