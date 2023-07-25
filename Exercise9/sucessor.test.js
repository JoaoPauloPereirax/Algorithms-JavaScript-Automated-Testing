const sucessor = require('./sucessor');


describe("Calculando o antecessor:",()=>{
     it("Sucessor de 0: ",()=>{
          const zero = 0;
          const ant = sucessor(zero);
          expect(ant).toBe(1);
     })
     it("Sucessor de 9: ",()=>{
          const nove = 9;
          const ant = sucessor(nove);
          expect(ant).toBe(10);
     })
})