const body = document.querySelector("body")
const table = document.getElementById("table")
table.className = "tabela"
let posicao = document.querySelector("td")
body.appendChild(table)

// array com palavras a serem achadas

const palavrasUsadas = [
    "SUSTENTARA", "CONFERIDOA", "ACONTECERA", "COMPACTARA", "INTIMIDARAb",
    "MONITORIAA", "LIBERTINAA", "COLONIZARA", "ASTRONOMOA", "BINARISMOA",
    "ESTAFANTEA", "DEGRADADOA", "INQUILINOA", "HIPOCRITAA", "IMPELIDOSA",
    "ARRAIGADASA", "CONGRESSOA", "SOLITARIOA", "ETNOLOGIAA", "MUAMBEIROA",
]

//array com letras aleatórias

const letrasAleatorias = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
let arrayPalavras = []  
    
// gerando aleatoriedade

let p1 = Math.floor(Math.random() * 19)
let p2 = Math.floor(Math.random() * 10)
let p3 = Math.floor(Math.random() * 7)
let p4 = Math.floor(Math.random()*  6)
let letter1 = palavrasUsadas[p1].split('');   // variáveis quebrando em strings e gerando aleatoriedade
let letter2 = palavrasUsadas[p2].split('');   // variáveis quebrando em strings
let letter3 = palavrasUsadas[p3].split('');   // variáveis quebrando em strings
let letter4 = palavrasUsadas[p4].split('');

if (letter1.length < 12) {   //condição de coluna
    letter1.push(letrasAleatorias[1])
}
if (letter2.length < 12) {   //condição de coluna
    letter2.push(letrasAleatorias[0])
}
if (letter3.length < 12) {  //condição de coluna
    letter3.push(letrasAleatorias[7])
}
if (letter4.length < 12){   //condição de coluna
    letter4.push(letrasAleatorias[10])
}

// condição de letras + colunas + linhas a serem inseridas. 

for (let index = 0; index < 11; index++) {
    arrayPalavras[index] = []
    for (let coluna = 0; coluna < 11; coluna++) {
        arrayPalavras[index][coluna] = letrasAleatorias[coluna];
        if (index === 0) {
            arrayPalavras[index][coluna] = letter1[coluna] //Numero da coluna a ter a palavra
        } else if (index === 3) {
            arrayPalavras[index][coluna] = letter2[coluna]//Numero da coluna a ter a palavra
        } else if (index === 7) {
            arrayPalavras[index][coluna] = letter3[coluna]//Numero da coluna a ter a palavra
        } else if (index === 10){
            arrayPalavras[index][coluna] = letter4[coluna]//Numero da coluna a ter a palavra
        }   else {
            arrayPalavras[index][coluna] = letrasAleatorias[coluna + index];
        }

    }


}
resultado(arrayPalavras)

function resultado() {
    for (let i = 0; i < arrayPalavras.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < arrayPalavras.length; j++) {
            let td = document.createElement("td");
            td.className = "letra"
            let resultado = document.createTextNode(arrayPalavras[i][j])
            tr.appendChild(td)
            td.appendChild(resultado);
            table.appendChild(tr)
        }
    }
}