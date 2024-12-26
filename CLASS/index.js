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
}

let obj = new Human();
console.log(obj.firstName);
obj.walking();