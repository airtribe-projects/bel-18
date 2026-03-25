class Player {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(`Player: ${this.name}`);
    }
}

// Whole
class Team {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
    
    addPlayer(player) {
        this.players.push(player);
    }
    
    showTeam() {
        console.log(`Team: ${this.name}`);
        this.players.forEach(player => player.display());
    }
}

// Main

const dhoni = new Player("MSD");
const tendulkar = new Player("Sachin");

const teamIndia = new Team("Indian Cricket Team", []);

const csk = new Team("Chennai Super Kings", [dhoni]);

teamIndia.addPlayer(sachin);
csk.addPlayer(sachin);