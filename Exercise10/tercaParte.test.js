const tercaParte = require('./tercaParte');

describe("Cálculo de um terço: ",()=>{
     it("Um terço de zero:",()=>{
          const zero = 0;
          const umTerco = tercaParte(zero);
          expect(umTerco).toBe(0);
     })
     it("Um terço de 9: ", ()=>{
          const num = 27;
          const umTerco = tercaParte(num);
          expect(umTerco).toBe(9);
     })
})