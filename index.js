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
const newRed3 = red3 * 0.25;

// 3.3 reduziere blau auf 1/4
const newBlue3 = blue3 * 0.25;

// 3.4 alles zusammenfügen
const answer3 = `RGB: rgb(${Math.floor(newRed3)}, 249, ${Math.floor(
    newBlue3
)})`;

// 3.5 Antwort
console.log(answer3);

// Gib nun die folgenden Farben in den gewünschten Formaten aus.
// 4. rgb(127, 255, 100) => HEX
// 4.1 extrahiere red green blue
const colors4 = "rgb(127,255,100)";
const red4 = +colors4.substring(4, 7);
const green4 = +colors4.substring(8, 11);
const blue4 = +colors4.substring(12, 15);
// 4.2 gebe hex
const answer4 = `#${red4.toString(16)}${green4.toString(16)}${blue4.toString(
    16
)}`;
// 4.2 answer
console.log(answer4);

// 5. C => RGB
// 5.1 extrahiere red green blue
const colors5 = "#E23F76";
const red5 = parseInt(colors5[1] + colors5[2], 16);
const green5 = parseInt(colors5[3] + colors5[4], 16);
const blue5 = parseInt(colors5[5] + colors5[6], 16);
// 5.2 to fixed benutzen
const answer5 = `RGB: rgb(${red5}, ${green5}, ${blue5})`;
// 5.3 answer ausgeben
console.log(answer5);

// 6. rgb(229, 13, 218) => HEX

const colors6 = "rgb(229, 13, 218)";
// 6.1 kanäle extrahieren
const red6 = +colors6.substring(4, 7);
const green6 = +colors6.substring(9, 11);
const blue6 = +colors6.substring(13, 16);

// 6.2 kanäle zu hex umformen
const red6Hex = red6.toString(16);
const green6Hex = green6.toString(16);
const blue6Hex = blue6.toString(16);
// console.log(red6Hex, green6Hex, blue6Hex);
// 6.3 ausgeben
const red6HexPadded = red6Hex.padStart(2, "0");
const green6HexPadded = green6Hex.padStart(2, "0");
const blue6HexPadded = blue6Hex.padStart(2, "0");
// 6.4 answer hex
const result6 = `#${red6HexPadded}${green6HexPadded}${blue6HexPadded}`;
console.log(result6);

// 7. #02D633 => RGB
// 7.1 red green blue extrahiern
const colors7 = "#02D633";
const red7 = parseInt(colors7[1] + colors5[3], 16);
const green7 = parseInt(colors7[3] + colors5[5], 16);
const blue7 = parseInt(colors7[5] + colors5[7], 16);

const answer7 = `RGB: rgb(${red7}, ${green7}, ${blue7})`;

console.log(answer7);
// 7.2 use parseInt

// 7.3
// Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
// 8. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben

// 9. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben

// 10. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben

// 11. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben

// 12. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben
