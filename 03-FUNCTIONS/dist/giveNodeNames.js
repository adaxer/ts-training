"use strict";
/**
 * traversing methoden
 * (getElementById, getElementsByClass, getElementsByTagName, getElementsByName)
 * geben unterschiedliche Datensammlungen zurück
 * es ist eine Funktion zu bauen, die alle diese Sammlungen als Argument akzeptiert,
 * sie durchiteriert und die NodeNames von den enthaltenen Elementen zurückgibt, im Array verpackt
 *
 * DEKLARATION:
 *  function giveNodeNames(args): string[] {
 *       //iterator,
 *  return ArrayOfNames
 *   }
 *
 * AUFRUF:
 *    giveNodeNames(getElementsByClass('importang'))
 *   giveNodeNames(getElementsByName('numbers'))
 *   giveNodeNames(getElementsByTagName('button'))
 *   giveNodeNames(getElementById('pID'))
 */
// function giveNodeNames(arg?: any, ...args: any[]): string[] {
function giveNodeNames(...args) {
    let arrayOfNodeNames = [];
    // if (arg)
    //     arrayOfNodeNames.push(arg)
    console.log('args :>> ', args);
    if (args[0].nodeName) {
        arrayOfNodeNames.push(args[0].nodeName);
    }
    else {
        for (const iterator of args[0]) {
            // console.log('iterator :>> ', iterator.nodeName);
            arrayOfNodeNames.push(iterator.nodeName);
        }
    }
    return arrayOfNodeNames;
}
let names;
names = giveNodeNames(document.getElementsByClassName('important'));
console.log('names :>> ', names);
for (const iterator of names) {
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementsByName('numbers'));
console.log('names :>> ', names);
for (const iterator of names) {
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementsByTagName('button'));
console.log('names :>> ', names);
for (const iterator of names) {
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementById('pID'));
console.log('names :>> ', names);
for (const iterator of names) {
    console.log('iterator :>> ', iterator);
}
//# sourceMappingURL=giveNodeNames.js.map