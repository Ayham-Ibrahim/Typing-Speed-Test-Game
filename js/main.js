// Array Of Words 

let words = [
    'infect',
    'neutral',
    'hello',
    'car',
    'beard',
    'banana',
    'apple',
    'motor',
    'glass',
    'class',
    'function',
    'variable',
    'array',
    'public',
    'static',
    'abstruct',
    'loop',
    'array',
    'foreach',
    'while',
    'do',
    'switch',
    'words',
    'element',
    'selector',
    'coding',
    'test',
    'Rust',
    'play',
    'ball',
    'market',
    'where',
    'practise',
]; 

// Set the level
let levels = {
    'Easy':8,
    'Normal':4,
    'Hard':3
};

// default level and second
let dafaultLevel = "Normal";   // can be change
let defaultSecond = levels[dafaultLevel];

// cach the Element
let levelNameSpan = document.querySelector(".message .level");
let levelSecondSpan = document.querySelector(".message .seconds");
let startButtom = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeft = document.querySelector(".time span");
let score = document.querySelector(".score .got");
let totalScore = document.querySelector(".score .total");
let finish = document.querySelector(".finish");


// setting level and second and score
levelNameSpan.innerHTML = dafaultLevel;
levelSecondSpan.innerHTML = defaultSecond;
timeLeft.innerHTML = defaultSecond;
totalScore.innerHTML = words.length;


//Disable pasting  event
input.onpaste = () => {
    return false;
}

// start funcion 
startButtom.onclick = function () {
    this.remove();
    input.focus(); 
    genWords();
}


// Generating words
function genWords() {
    // reset the timeLeft
    timeLeft.innerHTML = defaultSecond;
    // get random array from arrauy
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord); //get index of word

    // remove the word from array using index by slice
    words.splice(wordIndex,1);

    // Show the word
    theWord.innerHTML = randomWord;

    // move the word to upcomming-words after clean the upcomming
    upcomingWords.innerHTML = '';

    // generate upcomming word 
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let word = document.createTextNode(words[i]);
        div.appendChild(word);
        upcomingWords.appendChild(div);
    }
    // call start play funcion for controll time 
    startPlay ();
}

function startPlay () {
    let start = setInterval( ()=> {
        timeLeft.innerHTML--; 
        if (timeLeft.innerHTML === "0") {
            // stop counting
            clearInterval(start);
            // compare word
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // empty the field
                input.value = "";
                // increase the score
                score.innerHTML++;
                if (words.length > 0 ){
                    genWords();
                }else{
                    let div = document.createElement("div");
                    div.className = 'good';
                    let txt = document.createTextNode("Pravooooo");
                    div.appendChild(txt);
                    finish.appendChild(div);
                }
            }else {
                let div = document.createElement("div");
                div.className = 'bad';
                let txt = document.createTextNode("Game Over");
                div.appendChild(txt);
                finish.appendChild(div);
            }
        } 
    },1000);
}





