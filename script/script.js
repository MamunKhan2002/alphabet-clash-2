
function playerPress(event) {

    const pressAlphabet = event.key;

    // get the current Alphabet key 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or not 
    if (pressAlphabet === expectedAlphabet) {

        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const score = currentScore + 1;
        // currentScoreElement.innerText = score;

        const currentScoreText = getElementTextById("current-score");
        const updatedScore = currentScoreText + 1;
        setElementTextById("current-score", updatedScore)
        // console.log(currentScoreText);

        removeColorElementById(expectedAlphabet)
        continueGame();

    } else {

        const currentScoreText = getElementTextById("current-life");
        const updatedScore = currentScoreText - 1;
        setElementTextById("current-life", updatedScore)
        if (currentScoreText === 0) {
            hideElementById("play-ground");
            showElementById("result-section")
            console.log("Game Over!");
        }
        // console.log(currentScoreText);
        // ----------------------------
        // const currentScoreElement = document.getElementById("current-life");
        // const currentScoreElementText = currentScoreElement.innerText;
        // const lifeScore = parseInt(currentScoreElementText);
        // const life = lifeScore - 1;
        // currentScoreElement.innerText = life;

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
    hideElementById("result-section");
    showElementById("play-ground");
    continueGame();
}