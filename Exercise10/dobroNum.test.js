const dobro  = require('./dobroNum');

describe("O dobro de um número: ",()=>{
     it("O dobro de zero: ",()=>{
          const zero = 0;
          const dobroDoValor = dobro(zero);
          expect(dobroDoValor).toBe(0);
     })
     it("Dobro de um número qualquer: ",()=>{
          const num = 5;
          const dobroDoValor = dobro(num);
          expect(dobroDoValor).toBe(10);
     })
})