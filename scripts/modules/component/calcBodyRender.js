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

    const sticker = document.createElement(`div`);
    sticker.className = `sticker`

    const footer = document.createElement(`p`)
    footer.className = `footertext`
    footer.innerHTML = "Made in <strong>Argentina</strong> 💙🤍💙 By Alcalde Leonardo"
    sticker.appendChild(footer);
    calcBody.appendChild(sticker);
}

export default CalcBodyRender;
