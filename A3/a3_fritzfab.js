"use strict";
// -- [Aufgabe 1]
console.log("\nAufgabe 1:\n");
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 21;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Fabian`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
  
   Ich heiße Fabian.
   Ich esse gerne Pizza.
   Ich gehöre zur Generation Z
*/
// -- [Aufgabe 2]
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
    ["Bee Gees", 25.2]
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// A
console.log("\nAufgabe 2, a):\n");
console.log(`Das Array hat die Länge ${events.length}.`);
// B
console.log("\nAufgabe 2, b):\n");
let help = 1;
for (let entry of events) {
    console.log(`Event ${help}: ${entry}€.`);
    help++;
}
// C
console.log("\nAufgabe 2, c):\n");
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
console.log("\nAufgabe 2, d):\n");
let artist = "meTAlLiCa";
console.log(artistName(artist));
function artistName(n) {
    let help = 0;
    for (var i = 0; i < events.length; i++) {
        if (n.toLowerCase() == events[i][0].toLowerCase()) {
            return true;
        }
        else {
            help++;
        }
    }
    if (help != 0) {
        return false;
    }
    else {
        return true;
    }
}
// E
console.log("\nAufgabe 2, e):\n");
let zahl = 5;
console.log(`Die Fakultaet von ${zahl} ist ${factorial(zahl)}.`);
function factorial(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
// F
console.log("\nAufgabe 2, f):\n");
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// G
console.log("\nAufgabe 2, g):\n");
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
// H
console.log("\nAufgabe 2, h):\n");
let eventlist = [e, ee, eee];
for (var j = 0; j < eventlist.length; j++) {
    console.log(eventlist[j].show());
}
//# sourceMappingURL=a3_fritzfab.js.map