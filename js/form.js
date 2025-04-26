const slider = document.querySelector("#range");
const dangerValue = document.querySelector("#rangelevel");

slider.addEventListener("input", updateValue);

function updateValue() {
    dangerValue.textContent = slider.Value;

    if (slider.value > 4 && slider.value < 9) {
        // slider.parentNode.style.accentColor = "var(--warning-color)";
        slider.style.backgroundColor="orange";
      } else if (slider.value >= 9) {
        // slider.parentNode.style.accentColor = "var(--danger-color)";
        slider.style.backgroundColor = "#F00";
      } else {
        // slider.parentNode.style.accentColor = "var(--info-color)";
        slider.style.backgroundColor = "green";
      }
}

// Summary kode

document.querySelector("#webform").reset();

document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

function submitForm(){
document.querySelector("#sum").style.display = "block";

document.querySelector("#sumNavn").textContent = document.querySelector("#fName").value;
document.querySelector("#sumEmail").textContent = document.querySelector("#email").value;
document.querySelector("#sumPlet").textContent = document.querySelector("#pletvalg").value;
document.querySelector("#sumNiveau").textContent = document.querySelector("#range").value;

}
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
}
