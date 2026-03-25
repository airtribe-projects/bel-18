// Has A RelationShip (Strong)
// Part does not have any significance if the whole is destroyed

class Heart {
    beat() {
        console.log("Beating at 72 BPM")
    }
}


class Human {
    #heart;
    constructor(){
        this.#heart = new Heart()
    }
}

// Main
const jay = new Human();