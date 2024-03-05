import { Add, Div, Mult, Sus } from "./component/operations.js";

class Calculator{
    constructor(op1,op2){
        this.op1 = op1;
        this.op2 = op2
        this.equalPressFlag = false;
        console.log('this.op1 :>> ', this.op1);
        console.log('this.op2 :>> ', this.op2);
        this.Clear();
    }
    Clear(){
        let op1Value = `0`;
        let op2Value = `0`;
        let operator = ``
        this.UpdateScreen(`${op1Value} ${operator}`, op2Value)

    }
    UpdateScreen(disp1,disp2){
        this.op1.innerHTML = disp1;
        this.op2.innerHTML = disp2;
    }

    WriteNumsOp2(num){
        if(this.equalPressFlag) {
            this.UpdateScreen(0,0)
            this.equalPressFlag = false;
        }
        this.op2.innerHTML == 0
            ? this.UpdateScreen(this.op1.innerHTML, num)
            : this.UpdateScreen(this.op1.innerHTML, this.op2.innerHTML + num);

            console.log('this.equalPressFlag :>> ', this.equalPressFlag);
    }

    WriteOperators(operator){
        let num1 = this.op1.innerHTML;
        let num2 = this.op2.innerHTML;
        let newOpString;

        if(num1 == 0) {
            num1 = num2 + operator   
            this.UpdateScreen(num1,0)
        }else{
            let oldOperator = num1.slice(-1)
            console.log('oldOperator :>> ', oldOperator);
            num1 = Number(num1.substr(0, num1.length-1))
            num2 = Number(num2)
            newOpString = this.Operations(num1,num2, oldOperator)
            this.UpdateScreen(`${newOpString}${operator}`, 0)
            console.log('num1 :>> ', num1);
            console.log('num2 :>> ', num2);
        }


    }
    
    Operations(num1,num2, operator){
        console.log('num1, num2 :>> ', num1, num2);
        let result;
        // if(num1 != 0) {
        // }
        switch (operator) {
            case `+`:
                result = Add(Number(num1),Number(num2));
                console.log("suma");
                console.log('result :>> ', result);
                return result;

                
                
                
                
                break;
            case `-`:
                result = Sus(num1,num2)
                this.op2.innerHTML = result;
                console.log("resta");
                return result;

                
                break;
            case `x`:
                result = Mult(num1,num2)
                this.op2.innerHTML = result;
                console.log("Multiplicacion");
                return result;
                

                
                break;
            case `/`:
                result = Div(num1,num2)
                this.op2.innerHTML = result;
                console.log("Division");
                return result;

                
                break;
        
            default:
                break;
        }

    }

    getEqual(){
        let num1 = this.op1.innerHTML;
        let operator = num1.slice(-1)
        let num2 = Number(this.op2.innerHTML);

        if(!(this.equalPressFlag)){
            num1 = Number(num1.substr(0, num1.length-1))
    
            console.log("Aca va el resultado")
            console.log('num1 :>> ', num1);
            console.log('num2 :>> ', num2);
            console.log('operator :>> ', operator);
            this.UpdateScreen(0,this.Operations(num1,num2,operator))
            this.equalPressFlag = true;
        }

    }
}









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
            calc.WriteOperators(btn.innerHTML)
        })
    });

    // Equal btn AddEventListener
    const btnEqual = document.querySelector(`.btnEqual`)
    btnEqual.addEventListener(`click`, ()=>{
        calc.getEqual("")
    })


}