// -- [Aufgabe 1]

 console.log("\nAufgabe 1:\n");

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
 let age: number = 21;

 /**
  * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
  */
 let firstName: string = `Fabian`;
 
 function func1(age: number): number {
   return 2021 - age;
 }
 
 let output: string = func2(firstName);
 
 function func3(meal?: string): string {
   console.log(`Ich esse gerne ${meal || "Pizza"}.`);
   return func1(age) > 1995
     ? `Ich gehöre zur Generation Z`
     : `Ich gehöre zur Generation Y`;
 }
 
 console.log(output);
 
 function func2(name: string): string {
   console.log(`Ich heiße ${name}.`);
   return func3();
 }
 
 /* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
   
    Ich heiße Fabian.
    Ich esse gerne Pizza.
    Ich gehöre zur Generation Z
*/
 


// -- [Aufgabe 2]
 
 let events: any[][] = [
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
 let help: number = 1;
 for (let entry of events) {
    console.log(`Event ${help}: ${entry}€.`);
    help++;
 }

// C

 console.log("\nAufgabe 2, c):\n");
 price(events);

 function price(events: any): void {
    let highprice: number = events[0][1];
    let artist: string = events[0][0];
    for (var i: number = 0; i < events.length; i++) {
        if (events[i][1] > highprice) {
            highprice = events[i][1];
            artist = events[i][0];
        }
    }
    console.log(`Mit ${highprice}€ für ein Ticket, zahlt man am meisten bei (den) ${artist}.`);
}

// D

 console.log("\nAufgabe 2, d):\n");
 let artist: string = "meTAlLiCa";

 console.log(artistName(artist));

 function artistName(n: string): boolean {
    let help: number = 0;
    for (var i: number = 0; i < events.length; i++) {
        if (n.toLowerCase() == events[i][0].toLowerCase()) {
            return true;
        } else {
            help++;
        }
    }
    if (help != 0) {
        return false;
    } else {
        return true;
    }
}

// E

 console.log("\nAufgabe 2, e):\n");
 let zahl: number = 5;

 console.log(`Die Fakultaet von ${zahl} ist ${factorial(zahl)}.`);

 function factorial(num: number): number {
    let fact: number = 1;
    let i: number = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}

// F

 console.log("\nAufgabe 2, f):\n");
 for (var i: number = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    } 
}

// G

 console.log("\nAufgabe 2, g):\n");
 class ConcertEvent {

    private artist: string;
    private preis: number = 0;

    constructor(artist: string, preis: number) {
        this.artist = artist;
        this.preis = preis;
    }

    show(): string {
        return `Performer: ${this.artist}, Eintritt: ${this.preis}€.`;
    }

}

 let e: ConcertEvent = new ConcertEvent("John Mayer", 23.5);
 let ee: ConcertEvent = new ConcertEvent("Minami", 18.5);
 let eee: ConcertEvent = new ConcertEvent("WRLD", 15.5);

 console.log(e.show());

// H

 console.log("\nAufgabe 2, h):\n");
 let eventlist: Array<ConcertEvent> = [e , ee , eee];

 for (var j: number = 0; j < eventlist.length; j++) {
    console.log(eventlist[j].show());
}