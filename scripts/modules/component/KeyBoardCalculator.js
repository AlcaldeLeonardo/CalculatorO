function keysRender(keyboard) {
    for (let i = 0; i < 5; i++) {
        const rowKey = document.createElement(`div`);
        rowKey.className = "row keyboard__row";

        for (let j = 0; j < 4; j++) {
            const key = document.createElement(`button`);
            if (i === 0 || (j === 3 && i < 4)) {
                key.className =
                    "key keyboard__key keyboard__key--dark key--dark";
            } else {
                key.className = "key keyboard__key";
            }
            if (i === 4 && j === 3)
                key.className =
                    "key keyboard__key keyboard__key--darker key--darker";

            // add btnNum class if the key is a number
            if (j < 3 && i > 0) {
                if (i != 4 || j != 0 && j != 2 || i != 4)//condition that excepts buttons, within the range of this matrix [j,i] , that are not really numbers, such as the `-/+` key and the `.` key 
                    key.classList.add(`btnNum`);
            }
            // ---------------------------------------

            // add btnOps class if the key is a operator
            if (j == 3 && i != 4) {
                key.classList.add(`btnOps`);
            }

            if (j == 3 && i == 4) {
                key.classList.add(`btnEqual`);
            }
            if (j == 2 && i == 4) {
                key.classList.add(`btnFloat`)
            }
            if(i == 0 && j == 2) {
                key.classList.add(`btnC`);
            }
            
            if(i == 0 && j == 0) {
                key.classList.add(`btnBckspace`);
            }

            if(i == 0 && j == 1) {
                key.classList.add(`btnCE`);
            }

            if(i == 4 && j == 0) {
                key.classList.add(`btnSound`);
            }


            rowKey.appendChild(key);
        }

        keyboard.appendChild(rowKey);
    }
}

function keyContent() {
    const keys = document.querySelectorAll(".key");
    let content = [
        `←`,
        `CE`,
        `C`,
        `/`,
        `7`,
        `8`,
        `9`,
        `x`,
        `4`,
        `5`,
        `6`,
        `-`,
        `1`,
        `2`,
        `3`,
        `+`,
        `🔊`,
        `0`,
        `.`,
        `=`,
    ];
    let i = 0;

    keys.forEach((key) => {
        key.textContent = content[i];
        i++;
    });
}

function KeyBoardCalculator(calcBody) {
    const keyboard = document.createElement(`div`);
    keyboard.className = "keyborad calcBody__keyboard";
    calcBody.appendChild(keyboard);

    keysRender(keyboard);
    keyContent();
}

export default KeyBoardCalculator;
