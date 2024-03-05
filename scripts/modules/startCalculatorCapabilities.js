import { Calculator } from "./class/calculator.js";


export function startCalculatorCapabilities(){

    const operating1 = document.querySelector(`.operatingString`)
    const operating2 = document.querySelector(`.result`)

    console.log("aqui se iniciaron las capacidades de la calculadora");

    let calc = new Calculator(operating1, operating2);

    // Numbers`s addEventListener
    const btnNums = document.querySelectorAll(`.btnNum`)
    btnNums.forEach(btn => {
        btn.addEventListener(`click`,()=>{
            calc.WriteNumsOp2(btn.innerHTML);
        })
    });

    // Operatos`s addEventListener
    const btnOps = document.querySelectorAll(`.btnOps`)
    btnOps.forEach(btn => {
        btn.addEventListener(`click`,()=>{
            calc.setEqualFlag(false);
            calc.WriteOperators(btn.innerHTML)
        })
    });

    // Equal btn AddEventListener
    const btnEqual = document.querySelector(`.btnEqual`)
    btnEqual.addEventListener(`click`, ()=>{
        calc.getEqual()
    })


}