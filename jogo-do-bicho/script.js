const game = document.getElementById("game")
const animals = document.getElementById("animalsPanel")
const betButton = document.getElementById("betButton")
const totalCoins = document.getElementById("totalCoins")
const historico = [];
const column = 0;
const line = 0;
var coins = 1000;

const map = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

const animalSelect = (e) => {
    console.log(e.target);
    target = e.target
    column = Number(target.getAttribute ("column"));
    line = Number(target.getAttribute ("line"));   
}

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
        coins = coins*2
        totalCoins.innerText = Number(totalCoins + coins)
    }
    else{
        window.alert("Não foi dessa vez")
        coins -= coins
        totalCoins.innerText = Number(totalCoins - coins)
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 0
}

randomNumber();

