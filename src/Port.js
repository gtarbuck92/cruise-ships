class Port {
    constructor(portName) {
        this.portName = portName
        this.ships = []
    }

    addShip(ship) {
        this.ships.push(ship)
    }
    removeShip(ship) {
        const removedShip = this.ships.indexOf(ship)
        this.ships.splice(removedShip, 1);  
    }

}

module.exports = Port