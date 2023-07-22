const calculoMedia = require('./calculoMedia');

describe('Cálculo de média:',()=>{
     describe('Média entre dois números iguais:',()=>{
          it('Média entre 5 e 5:',()=>{
               const n1 = 5;
               const n2 = 5;
               const media = calculoMedia(n1,n2);
               expect(media).toBe(5);
          })

     })

     describe('Média entre dois números diferentes:',()=>{
          it('Média entre 7 e 5:',()=>{
               const n1 = 7;
               const n2 = 5;
               const media = calculoMedia(n1,n2);
               expect(media).toBe(6);
          })

     })
})