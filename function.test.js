import {getPercents} from './function.js';
describe("Persents",()=>{
    it("Work of function with plural numbers",()=>{
        expect(getPercents(30,200)).toBe("30 is 60 per cent from 200")
    }),
    it("Work of function with negative numbers",()=>{
        expect(getPercents(30,-200)).toBe("invalid data")
    }),
    it("Work of function with zero number",()=>{
        expect(getPercents(30,0)).toBe("Can't divided by zero")
    })
})