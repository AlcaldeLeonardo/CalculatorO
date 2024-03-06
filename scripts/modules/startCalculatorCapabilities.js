import { Calculator } from "./class/calculator.js";
import { playSoundBtn } from "./component/playSound.js";

export function startCalculatorCapabilities() {
    const operating1 = document.querySelector(`.operatingString`);
    const operating2 = document.querySelector(`.result`);

    let calc = new Calculator(operating1, operating2);

    // Numbers`s addEventListener
    const btnNums = document.querySelectorAll(`.btnNum`);
    btnNums.forEach((btn) => {
        btn.addEventListener(`click`, () => {
            playSoundBtn();
            if(!calc.getErrorFlag()){
                calc.WriteNumsOp2(btn.innerHTML);
            }
        });
    });

    //btnFloat AddEventListener
    const btnFloat = document.querySelector(`.btnFloat`);
    btnFloat.addEventListener(`click`, ()=>{
        const displayResult = operating2.innerHTML
        playSoundBtn();
            if(!calc.getErrorFlag() && displayResult.indexOf(`.`) == -1 && !calc.getEqualFlag()){
                calc.WriteNumsOp2(btnFloat.innerHTML);
            }
    })
    
    // Operatos`s addEventListener
    const btnOps = document.querySelectorAll(`.btnOps`);
    btnOps.forEach((btn) => {
        btn.addEventListener(`click`, () => {
            playSoundBtn();
            if(!calc.getErrorFlag()){
                calc.setEqualFlag(false);
                calc.WriteOperators(btn.innerHTML);
            }
        });
    });


    // Equal btn AddEventListener
    const btnEqual = document.querySelector(`.btnEqual`);
    btnEqual.addEventListener(`click`, () => {
        playSoundBtn();
        calc.getEqual();
    });
    // btnC addEventListener
    const btnC = document.querySelector(`.btnC`);
    btnC.addEventListener(`click`, ()=>{
        playSoundBtn();
        calc.setErrorFlag(false)
        calc.Clear();
    })
}
