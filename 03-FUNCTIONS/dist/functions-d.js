"use strict";
// examples missing
// *todo wie kriege ich hin, dass bei return type das undefined nicht drin steht?
function erstelleTransportmittel(p) {
    // let transportmittel: Boot | Flugzeug = {anzahlPassagiere: 34, fliege: function fliege () {return 0});
    let transportmittel;
    if (p <= 10) {
        transportmittel = {};
        transportmittel.anzahlPassagiere = p;
        transportmittel.fahre = () => `Ich transportiere max 10 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }
    else if (p <= 100) {
        transportmittel = {};
        transportmittel.anzahlPassagiere = p;
        transportmittel.fliege = () => `Ich transportiere max 100 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }
}
//# sourceMappingURL=functions-d.js.map