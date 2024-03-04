import DisplayCalculator from "./DisplayCalculator.js";
import KeyBoardCalculator from "./KeyBoardCalculator.js";

function CalcBodyRender(calcContainer) {
    const calcBody = document.createElement(`div`);
    calcBody.className = "calcBody";
    calcContainer.appendChild(calcBody);

    // displays elements
    DisplayCalculator(calcBody);

    // keyboard and his elements
    KeyBoardCalculator(calcBody);
}

export default CalcBodyRender;
