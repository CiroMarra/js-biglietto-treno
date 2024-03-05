// Chiedi la distanza in KM da percorrere al cliente
const infoCustomerKm = parseInt(prompt('Inserisci Km da percorrere'));
console.log(infoCustomerKm);
// Chiedi l'età al cliente
const infoCustomerAge = parseInt(prompt('Inserisci la tua età'));
console.log(infoCustomerAge)

// Calcola il prezzo del biglietto per il cliente 
    // Il prezzo del biglietto è il prodotto tra  la distanza in KM e il prezzo fisso di 0.21 euro al km.
    const totalPrice = infoCustomerKm * 0.21;
    console.log(totalPrice)


// Applica possibili sconti al cliente
 let percentage = 0;
 // Applica sconto del 20% per clienti al di sotto dei 18 anni.
 if (infoCustomerAge < 18 ) {
    percentage = 0.20;
 }
 // a
 else if (infoCustomerAge > 65) {
    percentage = 0.40;
 }
// Applica scontro del 40% per clienti al di sopra dei 65 anni.
 const discount = percentage * totalPrice;

 const finalPrice = totalPrice - discount;
 
 
 console.log(finalPrice);
// Output del costo del biglietto.  

const ticketCash = `il costo del tuo biglietto è: ${finalPrice.toFixed(2)} Є`

document.getElementById('ticket').innerHTML = ticketCash;