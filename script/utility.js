function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add("hidden");
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}

function setColorElementById(elementId) {
    const element = document.getElementById(elementId)
    element.style.backgroundColor = "#FFA500";
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijkmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // get the random index  number 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;

}

