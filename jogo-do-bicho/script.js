const game = document.getElementById("game") /*puxa onde vai ficar o jogo*/
const gameInterface = document.getElementById("gameInterface") /*puxa toda interface visivel do jogo*/
const animals = document.getElementById("animalsPanel") /*puxa os paneis dos animais*/
const betButton = document.getElementById("betButton") /*puxa o botão de apostas*/
const totalCoinsWay = document.getElementById("totalCoins") /*puxa o display de total de moedas*/
const historicoButton = document.getElementById("historicoButton") /*puxa o botão do historico e regras*/
const historicoList = document.getElementById("historicoList") /*puxa o display do historico*/
const historico = [];
var column = 0;
var line = 0;
var coins = 0;
var totalCoins = 1000;

/*Mapa das tiles dos animais*/

const map = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

/*Pega a informação da seleção do animal*/
const animalSelect = (e) => {
    console.log(e.target);
    target = e.target
    column = Number(target.getAttribute ("column"));
    line = Number(target.getAttribute ("line"));   
}

/*ouve o botão de selecionar o animal*/
animals.addEventListener("click", animalSelect);

const handleBuildLine = (currentLine, line) =>{
    for(let column = 0; column < currentLine.length; column++){
        const currentValue = currentLine[column]
        const div = document.createElement("div")

        div.setAttribute("column", column)
        div.setAttribute("line", line)

        div.innerText = currentValue

        animals.appendChild(div);
    }
};

const handleBuildMap = () => {
    for(let line = 0; line < map.length; line++){
        const currentLine = map[line];
        handleBuildLine(currentLine, line)
    }
};

handleBuildMap();

const betAction = (e) => {
    coins = document.getElementById("coins").value;
    const randomColumn = randomNumber()
    const randomLine = randomNumber()
    historico.push(randomColumn, randomLine)

    console.log(e.target);
    console.log(historico)
    console.log(randomColumn)
    console.log(randomLine)
    console.log(coins)


    win(randomColumn, randomLine, column, line, coins)    
}

betButton.addEventListener("click", betAction);

const win = (randomColumn, randomLine, column, line) => {
    
    if((column == randomColumn) && (line == randomLine)){
        window.alert("aeee caraio")
        totalCoins = totalCoins + (coins * coins)
        totalCoinsWay.innerText = totalCoins
        console.log(totalCoins)
    }
    else{
        window.alert("Não foi dessa vez")
        totalCoins = totalCoins - coins
        totalCoinsWay.innerText = totalCoins
        console.log(totalCoins)
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 0
}

randomNumber();

const showHistorico = () => {
    historicoList.classList.toggle("show")
    historicoList.classList.toggle("dontShow")
    gameInterface.classList.toggle("dontShow")
    
}

historicoButton.addEventListener("click", showHistorico)