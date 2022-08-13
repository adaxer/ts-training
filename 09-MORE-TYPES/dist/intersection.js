"use strict";
// Example 1
function destroyIfTooLong(obj) {
    if (obj.length > 1000) {
        obj.destroy();
    }
}
let both = { length: 1001, destroy: () => console.log("kaputt") };
destroyIfTooLong(both);
//# sourceMappingURL=intersection.js.map