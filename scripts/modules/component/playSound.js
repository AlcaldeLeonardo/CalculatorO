const audioBtn = new Audio(`/sounds/mech-keyboard-02-102918.mp3`)
const audioError = new Audio(`/sounds/invalid-selection-39351.mp3`)


export function playSoundBtn(soundMode) {
    if(soundMode){
        audioBtn.currentTime = 0;
        audioBtn.play();
    }
}

export function playSoundError(soundMode){
    if(soundMode){
        audioError.currentTime = 0;
        audioError.play();
    }
}