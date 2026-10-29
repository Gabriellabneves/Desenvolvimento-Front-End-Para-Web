# JavaScript

Quando se trabalha com o js vc precisa ter familiaridade com o CONSOLE 

EX 1:

console.log("Hello Word");
VM141:1 Hello Word
undefined
alert("Olá, tudo bem?");
undefined

Para limpar área de trabalho = ctrl+L

EX 2:

const nome = "Angelo";
let idade = 21;
let altura = 1.78;
let aprovado = true;
let matricula = null;
//interpolação
console.log(Nome: ${nome}, Idade: ${idade}, Altura: ${altura});
VM620:7 Nome: Angelo, Idade: 21, Altura: 1.78
undefined
//concatenação
console.log("Nome: " + nome + ", Idade: " + idade + ", Altura: " + altura);
VM897:2 Nome: Angelo, Idade: 21, Altura: 1.78
undefined

EX 3:

console.log(10 + 5);
console.log("10 + 5");
console.log("10" + "5");
VM1103:1 15
VM1103:2 10 + 5
VM1103:3 105
undefined

EX 4:

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
VM1290:4 7
VM1290:5 3
VM1290:6 10
VM1290:7 2.5
VM1290:8 1
VM1290:9 25
undefined

EX 5:

let nota1 = 8;
let nota2 = 6;

let media = (nota1 + nota2) / 2;

console.log("A média é: " + media);
VM1541:6 A média é: 7
undefined

EX 6:

let Nome = prompt("Qual é o seu nome?");

alert("Olá, " + Nome + "!");
undefined

EX 7:

camel case porDoSol
pascal case PorDoSol
snake case por_do_sol
screaming snake case POR_DO_SOL
kebab case por-do-sol (não é aceito no js)

EX 8:

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) /3;

alert("Sua média é " + media);
console.log("Sua média é: " + media);
VM2628:8 Sua média é: 4.333333333333333
undefined
