let nome, cidade;
console.log("Tipo de 'nome':", typeof nome);
console.log("Tipo de 'cidade':", typeof cidade);
nome = prompt("Digite seu nome:");
cidade = prompt("Digite a cidade onde você mora:");
console.log("Tipo de 'nome' após atribuição:", typeof nome);
console.log("Tipo de 'cidade' após atribuição:", typeof cidade);
console.log("Olá, meu nome é " + nome + " e eu moro em " + cidade);
 
 
 
let gostaDeProgramar = confirm("Você gosta de programar?");
let viajouParaForaDoPais = confirm("Você já viajou para fora do país?");
let temAnimaisDeEstimacao = confirm("Você tem animais de estimação?");
 
console.log("Você gosta de programar? Resposta: " + (gostaDeProgramar ? "Sim" : "Não"));
console.log("Você já viajou para fora do país? Resposta: " + (viajouParaForaDoPais ? "Sim" : "Não"));
console.log("Você tem animais de estimação? Resposta: " + (temAnimaisDeEstimacao ? "Sim" : "Não"));
 
 
let x = 5;
let y = 10;
console.log("Valores originais: x =", x, "e y =", y);
let temp = x;
x = y;
y = temp;
console.log("Novos valores: x =", x, "e y =", y);
let x = 5;
let y = 10;
console.log("Valores originais: x =", x, "e y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("Novos valores após a troca: x =", x, "e y =", y);
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
console.log("1. A soma dos números é:", soma);
console.log("2. A multiplicação dos números é:", multiplicacao);