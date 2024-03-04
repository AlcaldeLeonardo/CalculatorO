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
            rowKey.appendChild(key);
        }

        keyboard.appendChild(rowKey);
    }
}

function keyContent() {
    const keys = document.querySelectorAll(".key");
    let content = [
        `%`,
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
        `-/+`,
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
