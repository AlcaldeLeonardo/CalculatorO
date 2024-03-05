import { Add, Div, Mult, Sus } from "../component/operations.js";
import { playSoundError } from "../component/playSound.js";

export class Calculator {
    #equalPressFlag;
    #errorFlag
    constructor(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
        this.#equalPressFlag = false;
        this.Clear();
        this.setErrorFlag(false);
    }
    Clear() {
        let op1Value = 0;
        let op2Value = 0;
        let operator = ``;
        this.UpdateScreen(`${op1Value} ${operator}`, op2Value);
    }
    UpdateScreen(disp1, disp2) {
        this.op1.innerHTML = disp1;
        this.op2.innerHTML = disp2;
    }

    WriteNumsOp2(num) {
        if (this.getEqualFlag()) {
            this.UpdateScreen(0, 0);
            this.setEqualFlag(false);
        }
        if(num == `.`) {
            this.UpdateScreen(this.op1.innerHTML, this.op2.innerHTML + num);
        }else{
            this.op2.innerHTML == `0`
                ? this.UpdateScreen(this.op1.innerHTML, num)
                : this.UpdateScreen(this.op1.innerHTML, this.op2.innerHTML + num);
        }
    }

    WriteOperators(operator) {
        let num1 = this.op1.innerHTML;
        let num2 = this.op2.innerHTML;
        let newOpString;

        if (num1 == 0) {
            num1 = num2 + operator;
            this.UpdateScreen(num1, 0);
        } else {
            let oldOperator = num1.slice(-1);
            num1 = Number(num1.substr(0, num1.length - 1));
            num2 = Number(num2);
            newOpString = this.Operations(num1, num2, oldOperator);
            this.UpdateScreen(`${newOpString}${operator}`, 0);
        }
    }

    Operations(num1, num2, operator) {
        let result;
        // if(num1 != 0) {
        // }
        switch (operator) {
            case `+`:
                result = Add(Number(num1), Number(num2));
                return result;

                // break;
                //switch breaks were omitted because return ends with the execution of 
                //the block, then the breaks are redundant
            case `-`:
                result = Sus(num1, num2);
                this.op2.innerHTML = result;
                return result;

                
            case `x`:
                result = Mult(num1, num2);
                this.op2.innerHTML = result;
                return result;

                
            case `/`:
                try{
                    if(num2 != 0) {
                        result = Div(num1, num2);
                        this.op2.innerHTML = result;
                        return result;
                    }else{
                        playSoundError();
                        throw new Error(`cannot be divided by 0(zero)... press F5`)
                    }
                }catch(error){
                    console.error(error);
                    this.setErrorFlag(true);
                    return error;
                }

                

            default:
                result = Number(this.op2.innerHTML);
                return result;
                break;
                //The break is left here to avoid unexpected errors
        }
    }

    getEqual() {
        let num1 = this.op1.innerHTML;
        let operator = num1.slice(-1);
        let num2 = Number(this.op2.innerHTML);

        if (!this.getEqualFlag()) {
            num1 = Number(num1.substr(0, num1.length - 1));

            this.UpdateScreen(0, this.Operations(num1, num2, operator));
            this.setEqualFlag(true);
        }
    }

    setEqualFlag(value) {
        this.#equalPressFlag = value;
    }

    getEqualFlag() {
        return this.#equalPressFlag;
    }

    getErrorFlag(){
        return this.#errorFlag;
    }
    setErrorFlag(booleanValue){
        this.#errorFlag = booleanValue;
    }
}
