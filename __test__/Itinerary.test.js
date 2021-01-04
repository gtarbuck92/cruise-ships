const Itinerary = require("../src/itinerary");

describe('itinerary',() => {

    let itinerary
    let port0
    let port1

    beforeEach(() => {

        port0 = jest.fn()
        port1 = jest.fn()
        itinerary = new Itinerary([port0,port1]);    
    });
  
    describe('constructor function', () => {
        it('returns an object', () => {
            expect(itinerary).toBeInstanceOf(Object)
        })
        it('has ports',() => {
            expect(itinerary.ports).toEqual([port0,port1])
        })
    })  
})