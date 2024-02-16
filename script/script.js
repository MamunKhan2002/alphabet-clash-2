// function playButton() {
//     const hideHome = document.getElementById("home");
//     hideHome.classList.add("hidden");

//     const hidePlayGround = document.getElementById("play-ground");
//     hidePlayGround.classList.remove("hidden")

// }
function playerPress(event) {
    const alphabet = event.key;
    return alphabet;
}

document.addEventListener('keyup', playerPress)

function continueGame() {
    const alphabet = getARandomAlphabet();
    // display the current alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText = alphabet;
    const currentKeyAlphabet = setColorElementById(currentAlphabet);
    const playerPress = playerPress();

    if (alphabet === playerPress) {
        console.log(alphabet, playerPress);
        continueGame();
    }

}

function playButton() {
    hideElementById("home");
    showElementById("play-ground");
    continueGame();
}