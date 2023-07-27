<div align='center' >
        <h1>ESTUDO DE TESTES AUTOMATIZADOS - JEST<h1>
</div>

![Jest](./assets/images/jest-readme-headline.png)
<hr>

<p align="center">
  <a href="#EXERCÍCIOS">EXERCÍCIOS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#CONFIGURAÇÕES">CONFIGURAÇÕES</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#COMO-USAR">COMO USAR</a>
</p>

<hr>

## 📝 EXERCÍCIOS

1. Escreva um programa para aprovar um empréstimo bancário para a compra de uma casa. o programa vai perguntar o **valor da casa,** o **salário** do comprador e em **quantos anos** ele vai pagar. Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado.

2. Escreva em um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:
    - O primeiro valor é o maior!
    - O segundo valor é o maior!
    - Não existe valor maior, os dois são iguais!
    
3. Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com sua idade:
    - Se ele ainda vai se alistar no serviço militar.
    - Se é hora dele se alistar.
    - Se já passou o tempo de alistamento.

    OBS: Seu programa também deverá mostrar o tempo que falta ou que passou do prazo.
4. Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida:
    - Média abaixo de 5.0: Reprovado
    - Média entre 5.0 e 6.9: Recuperação
    - Média 7.0 ou superior: Aprovado
    
5. A CBX(Confederação Brasileira de Xadrez) precida de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:
    - Até 6 anos: Sub 6
    - Até 8 anos: Sub 8
    - Até 10 anos: Sub 10
    - Até 12 anos: Sub 12
    - Até 14 anos: Sub 14
    - Até 16 anos: Sub 16
    - Até 18 anos: Sub 18
    - Acima de 18 anos: Absoluto
    
6. Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu IMC e mostre seu status, de acordo com a tabela abaixo:
    - Abaixo de 18.5: Abaixo do peso.
    - Entre 18.5 e 25: Peso ideal.
    - Entre 25 e 30: Sobrepeso.
    - Entre 30 e 40: Obesidade.
    - Acima de 40: Obesidade Mórbida.

7. Faça um programa que faça o computador jogar jokempô com você.

8.Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.

9. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

## ⚙️ CONFIGURAÇÕES

### package.json

Podemos usar: 
```json
"scripts": {
    "test": "jest --verbose --coverage"
  }
```

Onde **--verbose** e **--coverage** mostram mais funções durante o teste.

## 🛠️ COMO USAR

Primeiramente devemos clonar o repositório ([GIT](https://git-scm.com/)):


```bash 
git clone git@github.com:JoaoPauloPereirax/Algorithms-JavaScript-Automated-Testing.git
```

Instalando as dependências (Dentro da pasta):

```bash 
npm install
```

Rodando os testes:

```bash 
npm test
```

Caso queira rodar o código direto no terminal usa-se:

```bash 
node nomeDoApp.js
```

Obs: Você deve ter o [NODE](https://nodejs.org/pt-br) instalado.

