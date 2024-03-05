import CalcBodyRender from "./component/calcBodyRender.js";

export function RenderCalc() {
    const calcContainer = document.querySelector(`#calcContainer`);

    CalcBodyRender(calcContainer);
}
