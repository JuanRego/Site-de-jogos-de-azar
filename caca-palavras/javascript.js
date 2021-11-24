const body = document.querySelector("body")
const table = document.getElementById("table")
table.className = "tabela"
let posicao = document.querySelector("td")
body.appendChild(table)

// array com palavras a serem achadas

const palavrasUsadas = [
    "SUSTENTAR", "CONFERIDO", "ACONTECER", "COMPACTAR", "INTIMIDAR",
    "MONITORIA", "LIBERTINA", "COLONIZAR", "ASTRONOMO", "BINARISMO",
    "ESTAFANTE", "DEGRADADO", "INQUILINO", "HIPÓCRITA", "IMPELIDOS",
    "ARRAIGADAS", "CONGRESSO", "SOLITARIO", "ETNOLOGIA", "MUAMBEIRO",
]

//array com letras aleatórias

const letrasAleatorias = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
let arrayPalavras = []  
    
// gerando aleatoriedade

let p1 = Math.floor(Math.random() * 19)
let p2 = Math.floor(Math.random() * 10)
let p3 = Math.floor(Math.random() * 7)
let letter1 = palavrasUsadas[p1].split('');   // variáveis quebrando em strings e gerando aleatoriedade
let letter2 = palavrasUsadas[p2].split('');   // variáveis quebrando em strings
let letter3 = palavrasUsadas[p3].split('');   // variáveis quebrando em strings

if (letter1.length < 10) {
    letter1.push(letrasAleatorias[2])
}
if (letter2.length < 10) {
    letter2.push(letrasAleatorias[0])
}
if (letter3.length < 10) {
    letter3.push(letrasAleatorias[7])
}


for (let index = 0; index < 10; index++) {
    arrayPalavras[index] = []
    for (let coluna = 0; coluna < 10; coluna++) {
        arrayPalavras[index][coluna] = letrasAleatorias[coluna];
        if (index === 1) {
            arrayPalavras[index][coluna] = letter1[coluna]
        } else if (index === 3) {
            arrayPalavras[index][coluna] = letter2[coluna]
        } else if (index === 7) {
            arrayPalavras[index][coluna] = letter3[coluna]
        } else {
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