// Verändere die Farbtöne wie angegeben.
// 1. rgb(247, 101, 101) => Rot um 80 verringern
const colors1 = "rgb(247, 101, 101)";
// 1.1 Rot extrahieren
const red1 = colors1.substring(4, 7);
// 1.2 Rot -80
const newRed1 = +red1 - 80;
// 1.3 ergebniss ausgeben
const result1 = `RGB: rgb(${newRed1}, 101, 101)`;
console.log(result1);
// 2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
const colors2 = "rgb(21, 35, 112)";
// 2.1 blau und grün extrahieren
const blue2 = colors2.substring(12, 15);
const green2 = colors2.substring(8, 10);
// 2.2 blau +100
const newBlue2 = +blue2;
const resultBlue2 = newBlue2 + 100;
// console.log(neuBlau);
// 2.3 grün +75
const newGreen2 = +green2;
const resultGreen2 = newGreen2 + 75;
// console.log(neuGruen);
// 2.4 ganze zahl zusammen schreiben blau und grün
const result2 = `RGB: rgb(21, ${resultGreen2}, ${resultBlue2})`;
// 2.5 Antwort
console.log(result2);

// 3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren
const colors3 = "rgb(167, 249, 85)";
// 3.1 extrahier rot und blau
const red3 = colors3.substring(4, 7);
const blue3 = colors3.substring(14, 16);
// 3.2 reduziere rot auf 1/4
const newRed3 = red3 * 0.75;

// 3.3 reduziere blau auf 1/4
const newBlue3 = blue3 * 0.25;

// 3.4 alles zusammenfügen
const answer3 = `RGB: rgb(${newRed3}, 249, ${newBlue3})`;
console.log(answer3);
// 3.5 Antwort
// Gib nun die folgenden Farben in den gewünschten Formaten aus.
// 1. rgb(127, 255, 100) => HEX

// 2. #E23F76 => RGB

// 3. rgb(229, 13, 218) => HEX

// 4. #02D633 => RGB

// Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
// 1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben

// 2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben

// 3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben

// 4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben

// 5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben
