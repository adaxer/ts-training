// examples missing




// fragen

interface Boot {
    anzahlPassagiere: number;
    fahre(): string;
}
interface Flugzeug {
    anzahlPassagiere: number;
    fliege(): string;
}
// *todo wie kriege ich hin, dass bei return type das undefined nicht drin steht?
function erstelleTransportmittel(p: number) {    
    // let transportmittel: Boot | Flugzeug = {anzahlPassagiere: 34, fliege: function fliege () {return 0});
    let transportmittel: Boot | Flugzeug;
    if (p <= 10 ) {
        transportmittel = {} as Boot;
        transportmittel.anzahlPassagiere = p;
        transportmittel.fahre = () => `Ich transportiere max 10 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    } else if (p <= 100) {
        transportmittel = {} as Flugzeug;
        transportmittel.anzahlPassagiere = p;
        transportmittel.fliege = () => `Ich transportiere max 100 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }    
}