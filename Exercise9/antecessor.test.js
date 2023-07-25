const antecessor = require('./antecessor');


describe("Calculando o antecessor:",()=>{
     it("Antecessor de 0: ",()=>{
          const zero = 0;
          const ant = antecessor(zero);
          expect(ant).toBe(-1);
     })
     it("Antecessor de 9: ",()=>{
          const nove = 9;
          const ant = antecessor(nove);
          expect(ant).toBe(8);
     })
})