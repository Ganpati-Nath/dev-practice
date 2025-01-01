class Human {

    //properties...
    firstName = "Name";
    age = 25;
    #wt = 80; //private...
    ht = 155;

    //behaviours...
    walking () {
        console.log("Hey... I'm walking...", this.#wt);
    }

    running () {
        console.log("Hey... I'm running...");
    }

    get fetchWeight() {
        return this.#wt;
    }

    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human();
console.log(obj.firstName);
obj.walking();
console.log(obj.fetchWeight);
obj.modifyWeight = 90;
console.log(obj.fetchWeight);