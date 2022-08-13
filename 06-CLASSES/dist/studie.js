"use strict";
class Studie {
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    changeId(newId) {
        this._id = newId;
    }
}
class OtherStudie extends Studie {
    constructor(id) {
        super(id);
        this._size = 1;
        this.changeId(2);
        this.id = 3;
        this._name = "";
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let os = new OtherStudie(1);
console.log(os);
//# sourceMappingURL=studie.js.map