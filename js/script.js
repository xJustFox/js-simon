// FUNZIONE CHE GENERA 5 NUMERI DIVERSI TRA LORO
function generateRandomNum(arrayNum) {
    let check_num = false;
    let randomInt;

    while (!check_num) {
        randomInt = Math.floor(Math.random()* 100 + 1);
        if (!arrayNum.includes(randomInt)) {
            check_num = true;
        }
    }

    return randomInt;
}

// FUNZIONE CHE GENERA L'ARRAY DEI NUMERI
function generateNumArray() {
    let arrayNum = [];

    for (let i = 1; i <= 5; i++) {
        let num = generateRandomNum(arrayNum);
        arrayNum.push(num);
    }

    return arrayNum;
}

// FUNZIONE CHE PRINTA LO SCORE A SCHERMO
function printingScore(score, playerNumArray, numList) {
    const elementScore = document.getElementById("score");
    const elementNumberList = document.getElementById("number-list");
    const elementNumber = document.getElementById("number-hit");

    if (score < 3) {
        elementScore.innerText = `Hai totalizzato ${score} punti, potevi fare di meglio.`;
        
    } else {
        elementScore.innerText = `Hai totalizzato ${score} punti, ben fatto.`;
    }

    elementNumberList.innerText = `I numeri da inserire erano: "${numList}".`
    elementNumber.innerText = `I numeri corretti che hai inserito sono: "${playerNumArray}".`;


}

// FUNZIONE CHE CREA IL CONTENITORE PER I NUMERI
function createCont(numListElement) {
    const number = document.createElement("h1");
    number.classList.add("number", "m-2");
    number.innerText = numListElement;

    // timer scomparsa numeri
    setTimeout(function(){
        number.innerText = "";
    }, 10000);

    return number;
}

// FUNZIONE CHE INIZZIALIZZA IL GIOCO
function createGame() {
    const numberCont = document.getElementById("container-number");
    numberCont.innerHTML = "";
    let numList = generateNumArray();

    for (let i = 0; i < numList.length; i++) {
        let number = createCont(numList[i]);
        
        console.log(numList[i]);
        
        numberCont.appendChild(number);
    }

    // timer comparsa prompt
    setTimeout(function () {
        let playerNumArray = [];
        let score = 0;

        for (let i = 1; i <= 5; i++) {
            let playerNum = parseInt(prompt(`Inserisci il ${i}° numero`));
            while (isNaN(playerNum)) {
                alert("Devi inserire un numero");
                playerNum = parseInt(prompt(`Inserisci il ${i}° numero`));
            }

            if (numList.includes(playerNum)) {
                score++;

                playerNumArray.push(playerNum);
            }
        }

        printingScore(score, playerNumArray, numList);
    }, 12000);

}


// GESTIONE BOTTONE START GAME
const button = document.getElementById("start");
button.addEventListener("click", function () {
    createGame()
})

