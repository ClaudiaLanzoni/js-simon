function numeroRandomPc(min, max) { 
    return (Math.floor(Math.random() * (max - min + 1)) + min);
} 

let randomNumbersList = [];

while (randomNumbersList.length < 5) {
    let numeroRandom = numeroRandomPc(1, 10);
    if(!randomNumbersList.includes(numeroRandom)) { //se non è incluso viene pushato
        randomNumbersList.push(numeroRandom);
    }
}

console.log(randomNumbersList); //lista numeri random da ricordare

let raccogliMemoria = [];

let numeriCorretti = [];

let numeriSbagliati = [];

alert(randomNumbersList);

function partenzaGioco () {
    for (let i=0; i<5; i++) {

        let numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
        
        raccogliMemoria.push(numero);

        while(numero.length === 0 || Number.isNaN(numero)) { 
            numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
        }

        if (randomNumbersList.includes(numero)) {
            numeriCorretti.push(numero)
        } else if (!randomNumbersList.includes(numero)) {
            numeriSbagliati.push(numero)
        }

    }

    console.log('Array di tutti i numeri inseriti dal giocatore: ' + raccogliMemoria);

    console.log('Numeri inseriti corretti: ' + numeriCorretti);

    console.log('Numeri inseriti sbagliati: ' + numeriSbagliati);

    if (randomNumbersList.sort().join('') === numeriCorretti.sort().join('')){
        alert('COMPLIMENTI! Hai indovinato tutti e 5 i numeri: ' + numeriCorretti);
    }
    else {
        alert('HAI PERSO! Hai indovinato solo ' + numeriCorretti.length + ' numeri, ovvero: ' + numeriCorretti);
    }

}

setTimeout(partenzaGioco, 10000);

