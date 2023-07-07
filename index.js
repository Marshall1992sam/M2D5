/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (numero1, numero2) {
    if (numero1 === numero2){
        return (numero1 + numero2) *3;
    } else {
        return numero1 + numero2;
    }
    }
    console.log(crazySum(4,8));
    console.log(crazySum(4,4));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (numero) {
    return numero >= 20 && numero <= 100 || numero === 400;  // || significa " OR " , combinazione di due condizioni 
}
console.log (boundary(15)); //false
console.log (boundary(50)); //true
console.log (boundary(400)); //true


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (stringa) {
    return stringa.split('').reverse().join('');
}
console.log (reverseString("EPICODE")); 

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (str) {
    return str.replace ( /\b\w/g, c => c.toUpperCase() ); // la regex /\b\w/g viene utilizzata con il metodo replace per individuare ogni lettera iniziale di ogni parola.
}

var str = "spero che funzioni";
var result = upperFirst(str);
console.log(result); 


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    var randomNumbers = [];

    for (var i = 0; i < n; i++) {
        var randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber);}
        return randomNumbers;
}  
var randomNumbers = giveMeRandom(5);
console.log(randomNumbers); 

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1, l2) {
var area = l1 * l2;
return area;
}
var lunghezza1 = 5;
var lunghezza2 = 10;
var risultato = area(lunghezza1, lunghezza2);
console.log ( "l'area del rettangolo è: " + risultato);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (numero) {
var differenza = Math.abs(numero - 19);

if (differenza >= 19) {
differenza *= 3; 
}
return differenza;
}

var numeroFornito = 4;
var risultato = crazyDiff(numeroFornito);
console.log("la differenza assoluta è :"  + risultato)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (str1) {
    if (str1.startsWith("code")) {
        return str1;
        } else {
        return "code" + str1;
    }
}

var str1 = "pizza"
var risultato1 = codify(str1);
console.log (risultato1);  // code  + stringa 

var str2 = "code panino";
var risultato2 = codify(str2);
console.log (risultato2); // code panino


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

  function check3and7 (numero) {
    if (numero % 3 === 0 || numero % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

var risutato1 = check3and7(9);
console.log(risutato1); // 9 è un multiplo di 3 quindi true 

var risutato2 = check3and7(14);
console.log(risutato2); // 14 è un multiplo di 7 quindi true

var risultato3 = check3and7(8);
console.log(risultato3); // 8 non è un multiplo di 3 o 7 quindi false 
    

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (stringa) {
    if (stringa.length <=2) {
        return "";
    } else {
        return stringa.slice (1, -1); 
    }
}

console.log (cutString ("Akita")); // kit 
console.log (cutString ("AkitaInu")); //kitaIn
console.log (cutString ("A")); // "" 