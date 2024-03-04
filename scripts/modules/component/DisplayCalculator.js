function OperatingStringRender(display) {
    const operatingString = document.createElement(`p`);
    operatingString.className = "operatingString display__operatingString";
    operatingString.textContent = "10+15+6";
    display.appendChild(operatingString);
}

function ResultDisplayRender(display) {
    const resultDisplay = document.createElement(`p`);
    resultDisplay.className = "result display__result";
    resultDisplay.textContent = "21";

    display.appendChild(resultDisplay);
}

function DisplayCalculator(calcBody) {
    const display = document.createElement(`div`);
    display.className = "display calcBody__display";
    calcBody.appendChild(display);

    OperatingStringRender(display);
    ResultDisplayRender(display);
}

export default DisplayCalculator;
