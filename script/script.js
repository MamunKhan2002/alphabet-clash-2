// function playButton() {
//     const hideHome = document.getElementById("home");
//     hideHome.classList.add("hidden");

//     const hidePlayGround = document.getElementById("play-ground");
//     hidePlayGround.classList.remove("hidden")

// }
function playerPress(event) {
    // get the player press alphabet key 
    const pressAlphabet = event.key;
    // console.log('player press alphabet', pressAlphabet);

    // get the current Alphabet key 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log('Expected alphabet', expectedAlphabet);
    // console.log(expectedAlphabet, pressAlphabet);
    // check right or not 
    if (pressAlphabet === expectedAlphabet) {
        console.log("You got a point");
        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const score = currentScore + 1;
        currentScoreElement.innerText = score;

        console.log(score);
        removeColorElementById(expectedAlphabet)
        continueGame();

    } else {
        console.log("you loss a life");
    }

}

document.addEventListener('keyup', playerPress)

function continueGame() {
    const alphabet = getARandomAlphabet();
    // display the current alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet
    // // set press key color 
    setColorElementById(alphabet)
}

function playButton() {
    hideElementById("home");
    showElementById("play-ground");
    continueGame();
}