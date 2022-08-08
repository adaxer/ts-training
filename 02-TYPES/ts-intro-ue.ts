/*
 * Password-Confirm:
Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
wird eine Meldung für Erfolg gezeigt, sonst ein Fehlerhinweis.
 */

const inp1 = document.getElementById('input1') as HTMLInputElement;
const inp2 = document.getElementById('input2') as HTMLInputElement;
const outp = document.getElementById('outp') as HTMLElement;

function handleInput() {
    if (inp1.value && inp2.value && inp1.value === inp2.value) {
        (outp as HTMLElement).textContent = 'Bestääääätigt';
    } else {
        (outp as HTMLElement).textContent = 'Eingaben fehlen oder sind falsch';
    }
}
