const call = document.getElementById("call-jogo-do-bicho") /*chama o botão que escolhe o jogo do bicho*/
const game = document.getElementById("game") /*puxa onde vai ficar o jogo*/
const gameInterface = document.getElementById("gameInterface") /*puxa toda interface visivel do jogo*/
const animals = document.getElementById("animalsPanel") /*puxa os paineis dos animais*/
const betButton = document.getElementById("betButton") /*puxa o botão de apostas*/
const totalCoinsWay = document.getElementById("totalCoins") /*puxa o display de total de moedas*/
const historicoButton = document.getElementById("historicoButton") /*puxa o botão do historico e regras*/
const menu = document.getElementById("menu") /*puxa o display do menu*/
const historicoContent = document.getElementById("historicoContent") /*puxa a lista onde vai imprimir os animais do historico*/
const showSortedAnimal = document.getElementById("show-sorted-animal") /*puxa o placar onde mostra o animal sorteado*/
const historico = [];
const animais =[
 ["Avestruz", "Águia", "Burro", "Borboleta", "Cachorro"]
, ["Cabra", "Carneiro", "Camelo", "Cobra", "Coelho"]
, ["Cavalo", "Elefante", "Galo", "Gato", "Jacaré"]
, ["Leão", "Macaco", "Porco", "Pavão", "Peru"]
, ["Touro", "Tigre", "Urso", "Veado", "Vaca"]
]

const animalssvg = [
    ["./jogo-do-bicho/img/aguia", ""]
]

var column = 0;
var line = 0;
var coins = 0;
var totalCoins = 1000;
var animal = "";

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
    animal = target.getAttribute("animal");   
}

/*ouve o botão de selecionar o animal*/
animals.addEventListener("click", animalSelect);

const handleBuildLine = (currentLine, line) =>{
    for(let column = 0; column < currentLine.length; column++){
        const currentValue = currentLine[column]
        const div = document.createElement("div")

        div.setAttribute("column", column)
        div.setAttribute("line", line)
        div.setAttribute("animal", animais[line][column])
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

function betAction(e) {
    coins = document.getElementById("coins").value
    const randomColumn = randomNumber()
    const randomLine = randomNumber()
    randomAnimal(randomLine, randomColumn)

    console.log(e.target)
    console.log(historico)
    console.log(randomColumn)
    console.log(randomLine)
    console.log(coins)
    console.log(animal)
    if (coins > totalCoins){
        alert("Você não tem moedas o suficientes")
    }
    else{
        win(randomColumn, randomLine, column, line, coins)
    }
    

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

const randomAnimal = (line, column) => {
    console.log(line)
    console.log(column)
    const value = animais[line][column]
    const div = document.createElement("li")
    div.innerText = value
    historicoContent.appendChild(div)
    
}

const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 0
}

randomNumber();

const showHistorico = () => {
    menu.classList.toggle("show")
    menu.classList.toggle("dontShow")
    gameInterface.classList.toggle("dontShow")
    
}

historicoButton.addEventListener("click", showHistorico)