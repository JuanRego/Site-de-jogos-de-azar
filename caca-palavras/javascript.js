const body = document.querySelector("body")
const table = document.getElementById("table")
table.className = "tabela"
let posicao = document.querySelector("td")
body.appendChild(table)

// array com palavras a serem achadas = 9 LETRAS CADA PALAVRA

const palavrasUsadas = [
    "SUSTENTARRQWDFGHY", "CONFERIDORQWDFGHY", "ACONTECERRQWDFGHY", "COMPACTARRQWDFGHY", "INTIMIDARRQWDFGHY",
    "MONITORIRQWDFGHY", "LIBERTINARQWDFGHY", "COLONIZARRQWDFGHY", "ASTRONOMORQWDFGHY", "BINARISMORQWDFGHY",
    "ESTAFANTERQWDFGHY", "DEGRADADORQWDFGHY", "INQUILINORQWDFGHY", "HIPOCRITRQWDFGHY", "IMPELIDOSRQWDFGHY",
    "ARRAIGADASRQWDFGHY", "CONGRESSORQWDFGHY", "SOLITARIORQWDFGHY", "ETNOLOGIRQWDFGHY", "MUAMBEIRORWDFGHY",
]

//array com letras aleatórias

const letrasAleatorias = [
    "A",  "C", "E", "G", "I", "K", "M", "O", "Q", "S", "U", "W", "Y",'B', 'D', 'F', 'H', 'J', 'L', 'N', 'P', 'R', 'T', 'V', 'X', 'Z'
    ]
let arrayPalavras = []  
    
// gerando aleatoriedade

let p1 = Math.floor(Math.random() * 20)
let p2 = Math.floor(Math.random() * 20)
let p3 = Math.floor(Math.random() * 20)
let p4 = Math.floor(Math.random()*  20)
let p5 = Math.floor(Math.random() * 20)


let letter1 = palavrasUsadas[p1].split('');   // variáveis quebrando em strings e gerando aleatoriedade
let letter2 = palavrasUsadas[p2].split('');   // variáveis quebrando em strings
let letter3 = palavrasUsadas[p3].split('');   // variáveis quebrando em strings
let letter4 = palavrasUsadas[p4].split('');     // variáveis quebrando em strings
let letter5 = palavrasUsadas[p5]. split('');    // variáveis quebrando em strings

// CONDIÇÕES A SEREM SEGUIDAS COM WIDTH FIXO
if (letter1.length <= 13) {   //condição de coluna
    letter1.push(letrasAleatorias[0])
}
if (letter2.length <= 13) {   //condição de coluna
    letter2.push(letrasAleatorias[0])
}
if (letter3.length <= 13) {  //condição de coluna
    letter3.push(letrasAleatorias[0])
}
if (letter4.length <= 13){   //condição de coluna
    letter4.push(letrasAleatorias[0])
}
if(letter5.length <= 13){
    letter5.push(letrasAleatorias[0])
}

// condição de letras + colunas + linhas a serem inseridas. 
for (let index = 0; index <= 13; index++) {
    arrayPalavras[index] = []
    for (let coluna = 0; coluna <= 13; coluna++) {
        arrayPalavras[index][coluna] = letrasAleatorias[coluna];
        if (index === 0) {
            arrayPalavras[index][coluna] = letter1[coluna] //Numero da coluna a ter a palavra
        } else if (index === 3) {
            arrayPalavras[index][coluna] = letter2[coluna]//Numero da coluna a ter a palavra
        } else if (index === 7) {
            arrayPalavras[index][coluna] = letter3[coluna]//Numero da coluna a ter a palavra
        } else if (index === 10){
            arrayPalavras[index][coluna] = letter4[coluna]//Numero da coluna a ter a palavra
        } else if (index === 13) {
            arrayPalavras[index][coluna] = letter5[coluna];
        } else {
            arrayPalavras[index][coluna] = letrasAleatorias[index + coluna]
        }

    }


}
resultado(arrayPalavras)

// CRIANDO TD E TR EM HTML

function resultado() {
    for (let i = 0; i < arrayPalavras.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < arrayPalavras.length; j++) {
            let td = document.createElement("td");
            td.className = "letraAleatorias"
            let resultado = document.createTextNode(arrayPalavras[i][j])
            tr.appendChild(td)
            td.appendChild(resultado);
            table.appendChild(tr)
        }
    }
}

// TENTATIVA DE SELECIONAR COM EVENT CLICK

/*function myFunction() {
    selecionado.addEventListener(click,myFunction[onfocus]);
  } */

  /*function myFunction() {
    document.getElementById("td").select();

  } */

  const chapters = document.querySelectorAll('table');
  chapters.forEach((resultado) => {
    chapter.addEventListener('toggle', resultado);
  });

  function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function iniciarTempo() {
    let duration = 60 * 0.50; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};