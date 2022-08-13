"use strict";
/*
 * Password-Confirm:
Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
wird eine Meldung für Erfolg gezeigt, sonst ein Fehlerhinweis.
 */
const inp1 = document.getElementById('input1');
const inp2 = document.getElementById('input2');
const outp = document.getElementById('outp');
function handleInput() {
    if (inp1.value && inp2.value && inp1.value === inp2.value) {
        outp.textContent = 'Bestääääätigt';
    }
    else {
        outp.textContent = 'Eingaben fehlen oder sind falsch';
    }
}
//# sourceMappingURL=ts-intro-ue.js.map