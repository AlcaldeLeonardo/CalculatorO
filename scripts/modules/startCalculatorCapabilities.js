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
            playSoundBtn(calc.getSoundFlag());
            if(!calc.getErrorFlag()){
                calc.WriteNumsOp2(btn.innerHTML);
            }
        });
    });

    //btnFloat AddEventListener
    const btnFloat = document.querySelector(`.btnFloat`);
    btnFloat.addEventListener(`click`, ()=>{
        const displayResult = operating2.innerHTML
        playSoundBtn(calc.getSoundFlag());
            if(!calc.getErrorFlag() && displayResult.indexOf(`.`) == -1 && !calc.getEqualFlag()){
                calc.WriteNumsOp2(btnFloat.innerHTML);
            }
    })
    
    // Operatos`s addEventListener
    const btnOps = document.querySelectorAll(`.btnOps`);
    btnOps.forEach((btn) => {
        btn.addEventListener(`click`, () => {
            playSoundBtn(calc.getSoundFlag());
            if(!calc.getErrorFlag()){
                calc.setEqualFlag(false);
                calc.WriteOperators(btn.innerHTML);
            }
        });
    });


    // Equal btn AddEventListener
    const btnEqual = document.querySelector(`.btnEqual`);
    btnEqual.addEventListener(`click`, () => {
        playSoundBtn(calc.getSoundFlag());
        calc.getEqual();
    });
    // btnC addEventListener
    const btnC = document.querySelector(`.btnC`);
    btnC.addEventListener(`click`, ()=>{
        playSoundBtn(calc.getSoundFlag());
        calc.setErrorFlag(false)
        calc.Clear();
    })

    const btnCE = document.querySelector(`.btnCE`)
    btnCE.addEventListener(`click`, ()=> {
        playSoundBtn(calc.getSoundFlag());
        calc.UpdateScreen(operating1.innerHTML, 0)
    })

    const btnBckspace = document.querySelector(`.btnBckspace`)
    btnBckspace.addEventListener(`click`, ()=>{
        let num = operating2.innerHTML
        playSoundBtn(calc.getSoundFlag());
        if(num.length >= 2) {
            calc.UpdateScreen(operating1.innerHTML, num.substring(0, num.length - 1))
        }else{
            calc.UpdateScreen(operating1.innerHTML, 0)
        }
    })

    const btnSound = document.querySelector(`.btnSound`)
    btnSound.addEventListener(`click`, ()=>{
        calc.toggleSoundFlag();
        playSoundBtn(calc.getSoundFlag())
        if(calc.getSoundFlag()){
            btnSound.innerHTML = `🔊`
        }else{
            btnSound.innerHTML = `🔈❌`
        }
    })
}
