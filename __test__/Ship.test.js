const Ship = require('../src/Ship')

describe('Ship constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object)
    })

    it('has a starting port', () => {
        const ship = new Ship('Dover')

        expect(ship.startingPort).toBe('Dover')
    })

    it('can set sail', () => {
        const Ship = new Ship('Dover')

        ship.setSail()
        
        expect(ship.startingPort).toBeFalsy()
    })
})
