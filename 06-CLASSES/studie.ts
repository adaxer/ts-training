interface Subject {
    id: number;
    size: number;
}


class Studie {
    
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    protected changeId(newId: number) {
        this._id = newId;
    }

    constructor(id: number) {
        this._id = id;
    }
}

class OtherStudie extends Studie implements Subject {
    constructor(id: number){
        super(id);
        this.changeId(2);
        this.id = 3;
        this._name = "";
    }

    private _size: number = 1;
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}

let os: OtherStudie = new OtherStudie(1);

console.log(os);