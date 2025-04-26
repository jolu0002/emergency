const slider = document.querySelector("#range");
const dangerValue = document.querySelector("#rangelevel");

slider.addEventListener("input", updateValue);

function updateValue() {
    dangerValue.textContent = slider.Value;

    if (slider.value > 49 && slider.value < 90) {
        // slider.parentNode.style.accentColor = "var(--warning-color)";
        slider.style.backgroundColor="orange";
      } else if (slider.value >= 90) {
        // slider.parentNode.style.accentColor = "var(--danger-color)";
        slider.style.backgroundColor = "#F00";
      } else {
        // slider.parentNode.style.accentColor = "var(--info-color)";
        slider.style.backgroundColor = "green";
      }
}