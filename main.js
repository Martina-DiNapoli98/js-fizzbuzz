/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */



/* creo un programma che permette di stampare i numeri da 1 a 100 */
for (let i=1; i<=100; i++){
    /* SE i numeri sono multipli di 3 e multipli di 5, allora stampo "FizzBuzz anzichè il numero" */
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
        
    }
    /* SE i numeri sono multipli di 3, stampo "Fizz" anzichè il numero */
    else if (i % 3 === 0){
        console.log("Fizz");
        
    }
    /* SE i numeri sono multipli di 5, stampo "Buzz" anzichè il numero */
    else if (i % 5 ===0){
        console.log("Buzz");
        
    }
    /* ALTRIMENTI se non sono multipli di 3 e 5, allora stampo i numeri */
    else {
        console.log(i);
        
    }
      
        
}