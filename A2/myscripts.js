let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.99],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];

// AUFGABE 2

// A

console.log(`Das Array hat die Länge ${events.length}.`);

// B [Uncaught TypeError: Cannot read properties of undefined (reading '0')] Theoretisch funktioniert B und hat bei meinem ersten
// mal, wo ichs gecodet hab auch funktioniert, es stürzt ja erst danach ab. Warum?

/*
for (var i = 0; 0 < events.length; i++) {
    console.log(`Performer: ${events[i][0]}, Preis: ${events[i][1]}€.`);
}
*/


// C

price(events);

function price(events) {
    let highprice = events[0][1];
    let artist = events[0][0];
    for (var i = 0; i < events.length; i++) {
        if (events[i][1] > highprice) {
            highprice = events[i][1];
            artist = events[i][0];
        }
    }
    console.log(`Mit ${highprice}€ für ein Ticket, zahlt man am meisten bei (den) ${artist}.`);
}

// D 

let artist = "meTAlLiCa";

console.log(artistName(artist));

function artistName(n) {
    let help = 0;
    for (var i = 0; i < events.length; i++) {
        if (n.toLowerCase() == events[i][0].toLowerCase()) {
            return true;
        } else {
            help++;
        }
    }
    if (help != 0) {
        return false;
    }
}

// E

let zahl = 5;

console.log(`Die Fakultaet von ${zahl} ist ${factorial(zahl)}.`);

function factorial(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++
    }
    return fact;
}

// F

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    } 
}

// G
class ConcertEvent {
    artist;
    preis = 0;
    constructor(artist, preis) {
        this.artist = artist;
        this.preis = preis;
    }
    show() {
        return `Performer: ${this.artist}, Eintritt: ${this.preis}€.`;
    }
}
let e = new ConcertEvent("John Mayer", 23.5);
let ee = new ConcertEvent("Minami", 18.5);
let eee = new ConcertEvent("WRLD", 15.5);
console.log(e.show());
console.log("-----------------------------------------");
// H
let eventlist = [e, ee, eee];
for (var i = 0; i < eventlist.length; i++) {
    console.log(eventlist[i].show());
}
