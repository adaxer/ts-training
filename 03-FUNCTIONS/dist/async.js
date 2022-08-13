"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function wait(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Warte ", ms, " ms");
        yield new Promise(f => setTimeout(f, ms));
        // console.log("Zeit ist fast um");
        // await new Promise(f => setTimeout(f, 1000));
        console.log("Zeit ist ganz um");
    });
}
function timer() {
    return __awaiter(this, void 0, void 0, function* () {
        let counter = 0;
        while (true) {
            yield wait(1000);
            document.getElementById("output").innerHTML = (++counter).toString();
        }
    });
}
timer();
console.log("Rufe async Funktion");
wait(5000);
console.log("async Funktion wurde gerufen");
//# sourceMappingURL=async.js.map